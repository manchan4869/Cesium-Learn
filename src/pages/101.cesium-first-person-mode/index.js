import { cesiumIonAccessToken } from '@/config/accessToken'
import '@/style/main.styl'
Cesium.Ion.defaultAccessToken = cesiumIonAccessToken;

import FirstPersonCameraMode from '@geoblocks/cesium-first-person-mode';
import './CesiumFirstPersonCameraController'

// 使用 'cesiumContainer' ID 在 HTML 元素中初始化铯查看器。
const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain()
});
// 添加铯 OSM 建筑物，这是一个全局 3D 建筑物图层。
const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());

viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(115.036, 30.2, 2000),
  orientation: {
    heading: Cesium.Math.toRadians(0.0),
    pitch: Cesium.Math.toRadians(-45.0),
  }
});

const btn1 = document.querySelector(".btn.btn-primary")
const btn2 = document.querySelector(".btn.btn-success")
const mode = new FirstPersonCameraMode(viewer.scene);
const firstPersonCameraController = new Cesium.FirstPersonCameraController({ cesiumViewer: viewer });
btn1.addEventListener('click', () => {
  mode.active = true;
})
const firstPersonCameraActive = (() => {
  let f = false
  return () => {
    f = !f
    return f
  }
})()

btn2.addEventListener('click', () => {
  const event = {
    true: 'start',
    false: 'stop'
  }
  firstPersonCameraController[event[firstPersonCameraActive()]]();

  // console.log(event[firstPersonCameraActive()]());

})
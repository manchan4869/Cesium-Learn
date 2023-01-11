import { cesiumIonAccessToken } from '@/config/accessToken'
import '@/style/main.styl'
Cesium.Ion.defaultAccessToken = cesiumIonAccessToken;

// 使用 'cesiumContainer' ID 在 HTML 元素中初始化铯查看器。
const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain()
});
// 添加铯 OSM 建筑物，这是一个全局 3D 建筑物图层。
const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());
// 将相机以给定的经度、纬度和高度飞往旧金山。
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(115.036, 30.2, 1000),
  orientation: {
    heading: Cesium.Math.toRadians(0.0),
    pitch: Cesium.Math.toRadians(-45.0),
  }
});
console.log(Cesium.Cartesian3.fromDegrees(115.036, 30.2, 1000));
console.log(Cesium.Math.toRadians(180));
import { cesiumIonAccessToken } from '@/config/accessToken'
import '@/style/main.styl'
Cesium.Ion.defaultAccessToken = cesiumIonAccessToken;
// Keep your `Cesium.Ion.defaultAccessToken = 'your_token_here'` line from before here. 
const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain()
});
const osmBuildings = viewer.scene.primitives.add(Cesium.createOsmBuildings());

// 步骤 3 代码（第一点）
// 这是我们为我们的航班收集的第一批雷达样本之一。
const dataPoint = { longitude: -122.38985, latitude: 37.61864, height: -27.32 };
// 用红点标记此位置。
const pointEntity = viewer.entities.add({
  description: `First data point at (${dataPoint.longitude}, ${dataPoint.latitude})`,
  position: Cesium.Cartesian3.fromDegrees(dataPoint.longitude, dataPoint.latitude, dataPoint.height),
  point: { pixelSize: 10, color: new Cesium.Color.fromCssColorString('#fffaaaaa') }
});
// Fly the camera to this point.
viewer.flyTo(pointEntity);
console.log();
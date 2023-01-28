import { cesiumIonAccessToken } from '@/config/accessToken'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.styl'
Cesium.Ion.defaultAccessToken = cesiumIonAccessToken;

const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain()
});
const osmBuildings = viewer.scene.primitives.add(Cesium.createOsmBuildings());
var scene = viewer.scene;
// scene.lightSource.ambientLightColor = new Cesium.Color(0.65, 0.65, 0.65, 1);
var viewshed3D = new Cesium.ViewShed3D(scene);
console.log(viewshed3D);
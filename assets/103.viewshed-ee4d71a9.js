import"./modulepreload-polyfill-ec808ebb.js";import{c as i}from"./accessToken-5e40def6.js";/* empty css                      */Cesium.Ion.defaultAccessToken=i;const e=new Cesium.Viewer("cesiumContainer",{terrainProvider:Cesium.createWorldTerrain()});e.scene.primitives.add(Cesium.createOsmBuildings());var s=e.scene,r=new Cesium.ViewShed3D(s);console.log(r);

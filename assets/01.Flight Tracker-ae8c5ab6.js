import"./modulepreload-polyfill-ec808ebb.js";import{c as t}from"./accessToken-5e40def6.js";/* empty css             */Cesium.Ion.defaultAccessToken=t;const i=new Cesium.Viewer("cesiumContainer",{terrainProvider:Cesium.createWorldTerrain()});i.scene.primitives.add(Cesium.createOsmBuildings());const e={longitude:-122.38985,latitude:37.61864,height:-27.32},o=i.entities.add({description:`First data point at (${e.longitude}, ${e.latitude})`,position:Cesium.Cartesian3.fromDegrees(e.longitude,e.latitude,e.height),point:{pixelSize:10,color:new Cesium.Color.fromCssColorString("#fffaaaaa")}});i.flyTo(o);console.log();
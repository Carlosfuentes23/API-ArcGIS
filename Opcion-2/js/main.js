require([
      "esri/config",
      "esri/Map",
      "esri/layers/FeatureLayer",
      "esri/views/MapView",
      "esri/widgets/Home"
   ],
   function (
      esriConfig,
      Map,
      FeatureLayer,
      MapView,
      Home
   ) {
      esriConfig.apiKey = "AAPK7591daeb76d64e44990358dcac82bf97a2T0BXRvYuvK4uKykv9xzu2zZBbKPpu1SW9SA4ldxqY1kOe5UF2JyWQCH74LJehq";

   const map = new Map({
      basemap: "streets"
   });

   const view = new MapView({
      container: "viewDiv",
      map: map,
      zoom: 12,
      center: [-74.051239, 4.673729]
   });

   const homeWidget = new Home({
      view: view
   });
   view.ui.add(homeWidget, "top-left");


   const featureLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/rxsqAG0ztOQO48WN/arcgis/rest/services/Colegios_Bogota_2017/FeatureServer/0"
   });
   map.add(featureLayer);
});

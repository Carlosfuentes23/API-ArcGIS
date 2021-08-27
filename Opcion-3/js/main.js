require([
      "esri/config",
      "esri/Map", 
      "esri/views/MapView",
      "esri/widgets/Home"
   ], 
   function (
      esriConfig,
      Map, 
      MapView,
      Home
   ) {
      esriConfig.apiKey = "AAPK7591daeb76d64e44990358dcac82bf97a2T0BXRvYuvK4uKykv9xzu2zZBbKPpu1SW9SA4ldxqY1kOe5UF2JyWQCH74LJehq";

      const map = new Map({
         basemap: "arcgis-topographic" 
      });

      const view = new MapView({
         map: map,
         center: [-74.051239, 4.673729], // Longitude, latitude
         zoom: 15, // Zoom level
         container: "viewDiv" // Div element
      });

      var homeWidget = new Home({
         view: view
      });
      view.ui.add(homeWidget, "top-left");

   });
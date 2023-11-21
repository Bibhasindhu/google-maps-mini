mapboxgl.accessToken =
  "pk.eyJ1IjoiYmliaGFzaW5kaHUiLCJhIjoiY2twOTY5YWRoMGgwaTJ1bjFma2MxbW14diJ9.iKAhcg-u92dqTfo-D_UFjw";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([77.10898, 28.646519]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });

  map.addControl(new mapboxgl.NavigationControl());

  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    }),
    "top-left"
  );

  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserLocation: false,
      fitBoundsOptions: {
        zoom: 16,
      },
    }),
    "bottom-right"
  );
}

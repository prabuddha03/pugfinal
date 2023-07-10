/* eslint-disable */
export function displayMap(locations) {
  mapboxgl.accessToken =
    'YOUR-MAPBOX-ACCESS-TOKEN';
 
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'YOUR-MAP-STYLE',
    scrollZoom: false,
  });
 
  const bounds = new mapboxgl.LngLatBounds();
  
  locations.forEach((loc) => {
    // create new element (marker) to add to the map
    const el = document.createElement('div');
    el.className = 'marker';
 
    // add marker to the map
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
 
    // add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);
 
    // extend the map bounds to include the current location
    bounds.extend(loc.coordinates);
  });
 
  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
}
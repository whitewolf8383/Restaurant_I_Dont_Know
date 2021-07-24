/* Keith J. Francis
*  ICT 4510
*  Spring 2021
*  This script produces an active map for location of the restaurant. 
*/

// Mapbox API Use
let key = 'pk.eyJ1IjoidjhpbnRlZ3JhIiwiYSI6ImNrb2RsdGIwNTAzMTkycHA1Ym9tMWpxZ3QifQ.Zq4NP6ZxKq7OMgJoCzNq3A'
let lat = 39.678121;
let long = -104.961753;
const map = L.map('map').setView([lat, long], 15);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 20,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: key
}).addTo(map);
L.marker([lat, long]).addTo(map);
L.popup()
  .setLatLng([lat, long])
  .setContent("Hello, Welcome to Restaurant: I Don't Know!")
  .openOn(map);
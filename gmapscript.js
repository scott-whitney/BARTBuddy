var map;
var latlng = {lat: 37.803530, lng: -122.271602}
  
  function initMap() {
    
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: latlng
    });
  }
  
//   var button = document.querySelector("input.form");
//       var userSelectLat;
//       var userSelectLng;
  
//       //add an event listener which executes the callback function, geoLocation, when the Submit button is clicked
//       button.addEventListener("click", getLocation);
  
//       function getLocation(event) {
//         event.preventDefault()
//         //store city entered into a variable, put it in quotes, and add that to the geocode URL
//         var city = document.querySelector("input#destination.inputBox").value;
//         var cityInQuotes = "\"" + city + "\""
//         var geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address="+cityInQuotes+"AIzaSyCK3efbmmMMdKaa_ekHF8LS7oIPGXQV3w";
//         //return JSON and
//         $.get(geocodeURL,printCoordinates)
//     }
  
//     function printCoordinates(results) {
//       if (results.status === "ZERO_RESULTS") {
//         alert("Location not found. Try searching for a city or more specific location.")
//     } else {
//       userSelectLat = results.results[0].geometry.location.lat;
//       userSelectLng = results.results[0].geometry.location.lng;
//       console.log('arrayresults = '+userSelectLat,userSelectLng);
//       }
//       //re-center map based on new location
//       var relocate = new google.maps.LatLng(userSelectLat, userSelectLng);
//       alert("setting the center to: " + relocate);
//       map.setCenter(relocate);
//   }


// var geocoder;
// var map;
// var latlng = new google.maps.LatLng(-34.397, 150.644);

// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
//     google.maps.event.addListenerOnce(map, 'idle', codeAddress);

// }

// function codeAddress() {

//     // Define address to center map to
//     var address = 'Paris, France';

//     geocoder.geocode({
//         'address': address
//     },
//         function (results, status) {

//             if (status == google.maps.GeocoderStatus.OK) {

//                 // Center map on location
//                 map.setCenter(results[0].geometry.location);

//                 // Add marker on location
//                 var marker = new google.maps.Marker({
//                     map: map,
//                     position: results[0].geometry.location
//                 });

//             } else {

//                 alert("Geocode was not successful for the following reason: " + status);
//             }
//         });
// }
// initMap();
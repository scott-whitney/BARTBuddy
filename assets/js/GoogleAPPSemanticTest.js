var destinySpot = "";
var choicesArray = ["resturaunt", "point_of_interest", "lodging", "store"];

var destinystate = "Bay Area";
var addressThis = "";

var map;
var service;
var infowindow;

function initMap() {
  var styledMapType = new google.maps.StyledMapType(
    [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
    { name: "Dark Mode" }
  );
  var sydney = new google.maps.LatLng(37.7749, 122.4194);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById("map"), {
    center: sydney,
    zoom: 15,
    mapTypeControlOptions: {
      mapTypeIds: [
        "roadmap",
        "satellite",
        "hybrid",
        "terrain",
        "styled_map",
        "streetViewControl",
      ],
    },
  });
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");

  var request1 = {
    // bartstation input
    query: destinySpot,
    fields: ["name", "geometry"],
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request1, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var pyrmont = new google.maps.LatLng(
        results[0].geometry.location.lat(),
        results[0].geometry.location.lng()
      );
      map = new google.maps.Map(document.getElementById("map"), {
        center: pyrmont,
        zoom: 15,
        mapTypeControlOptions: {
          mapTypeIds: [
            "roadmap",
            "satellite",
            "hybrid",
            "terrain",
            "styled_map",
            "streetViewControl",
          ],
        },
      });
      map.mapTypes.set("styled_map", styledMapType);
      map.setMapTypeId("styled_map");
      var request2 = {
        location: pyrmont,
        radius: "500",
        // nearby places search input
        type: [choicesArray[3]],
      };
      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request2, callback);

      function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            console.log(results)
            for(var i = 0; i<5; i ++){
                if(results[i].photos){
                    var imgUrl = results[i].photos[0].getUrl({maxHeight: '200', maxWidth: '150'});
                    var namePlace = results[i].name
                    var address = results[i].vicinity;
                    var divinator = $('<div>')
                    var pAdd = $("<a>")
                    .text(address)
                    .attr("class", "button is-link randomBtn");
                    var h2tag = $('<h1>').text(namePlace)
                    var imgtag = $("<img>").attr("src", imgUrl);
                    var divy = $('<div>').attr('class', 'ui segment')
                    var imagineDivs = divinator.append(pAdd)
                    var imagineBart = divy.append(h2tag, imgtag, imagineDivs)
                    $('#thingsToDo').append(imagineBart)
                } else {
                    return;
                }

            }

          $("#thingsToDo").click(addressTheIssue);
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }
    }
  });
}

function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", function () {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

function addressTheIssue() {
  if (event.target.matches("a")) {
    console.log("im working");
    var chosenAddress = $(this).text();
    console.log(chosenAddress);
    addressThis = chosenAddress;
    generateNewMap();
  }
}
function generateNewMap() {
  var map;

  initMapy();
  function initMapy() {
    console.log("initmap");
    var sydney = new google.maps.LatLng(-33.867, 151.195);

    infowindow = new google.maps.InfoWindow();

    map = new google.maps.Map(document.getElementById("map"), {
      center: sydney,
      zoom: 15,
    });

    var request = {
      query: addressThis,
      fields: ["name", "geometry"],
    };

    var service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
        map.setCenter(results[0].geometry.location);
      }
    });
  }
}






$(document).ready(function () {
  var bartStationArray = [
    {
      stationName: "12th St. Oakland City Center",
      Abbr: "12th",
      route: "red, orange, yellow",
    },
    {
      stationName: "16th St. Mission (SF)",
      Abbr: "16th",
    },
    {
      stationName: "19th St. Oakland",
      Abbr: "19th",
      route: "red, orange, yellow",
    },
    {
      stationName: "24th St. Mission(SF)",
      Abbr: "24th",
      route: "red, yellow, blue, green",
    },
    {
      stationName: "Ashby (Berkeley)",
      Abbr: "ashb",
      route: "red, orange",
    },
    {
      stationName: "Antioch",
      Abbr: "antc",
      route: "Yellow",
    },
    {
      stationName: "Balboa Park (SF)",
      Abbr: "balb",
      route: "red, yellow, blue, green",
    },
    {
      stationName: "Bay Fair (San Leandro)",
      Abbr: "bayf",
      route: "blue, orange, green",
    },
    {
      stationName: "Berryessa",
      Abbr: "bery",
      route: "",
    },
    {
      stationName: "Castro Valley",
      Abbr: "cast",
      route: "blue",
    },
    {
      stationName: "Civic Center",
      Abbr: "civc",
      route: "red, yellow, blue, green",
    },
    {
      stationName: "Coliseum",
      Abbr: "cols",
      route: "blue, orange, green",
    },
    {
      stationName: "Colma",
      Abbr: "colm",
      route: "red, yellow",
    },
    {
      stationName: "Concord",
      Abbr: "conc",
      route: "Yellow",
    },
    {
      stationName: "Daly City",
      Abbr: "daly",
      route: "red, yellow, blue, green",
    },
    {
      stationName: "Downtown Berkeley",
      Abbr: "dbrk",
      route: "red, orange",
    },
    {
      stationName: "EL Cerrito Del Norte",
      Abbr: "deln",
      route: "red, orange",
    },
    {
      stationName: "El Cerrito Plaza",
      Abbr: "plza",
      route: "red, orange",
    },
    {
      stationName: "Embarcadero(SF)",
      Abbr: "embr",
      route: "red, yellow, blue, green",
    },
    {
      stationName: "Fremont",
      Abbr: "frmt",
      route: "orange, green",
    },
    {
      stationName: "Fruitvale (Oakland)",
      Abbr: "ftvl",
      route: "blue, green, orange",
    },
    {
      stationName: "Glen Park (SF)",
      Abbr: "glen",
      route: "red, yellow, blue, green",
    },
    {
      stationName: "Hayward",
      Abbr: "hayw",
      route: "orange, green",
    },
    {
      stationName: "Lafayette",
      Abbr: "lafy",
      route: "Yellow",
    },
    {
      stationName: "Lake Merritt (Oakland)",
      Abbr: "lake",
      route: "blue, orange, green",
    },
    {
      stationName: "MacArthur",
      Abbr: "mcar",
      route: "orange, red, yellow",
    },
    {
      stationName: "Millbrae",
      Abbr: "mlbr",
      route: "red, purple",
    },
    {
      stationName: "Milpitas",
      Abbr: "mlpt",
      route: "",
    },
    {
      stationName: "Montgomery St. (SF)",
      Abbr: "mont",
      route: "red, yellow, blue, green",
    },
    {
      stationName: "North Berkeley",
      Abbr: "nbrk",
      route: "red, orange",
    },
    {
      stationName: "North Concord/Martinez",
      Abbr: "ncon",
      route: "Yellow",
    },
    {
      stationName: "Oakland Int'l Airport",
      Abbr: "oakl",
    },
    {
      stationName: "Orinda",
      Abbr: "orin",
      route: "Yellow",
    },
    {
      stationName: "Piitsburg/Bay Point",
      Abbr: "pitt",
      route: "Yellow",
    },
    {
      stationName: "Pittsburg Center",
      Abbr: "pctr",
      route: "Yellow",
    },
    {
      stationName: "Pleasant Hill",
      Abbr: "phil",
      route: "Yellow",
    },
    {
      stationName: "Powell St. (SF)",
      Abbr: "powl",
      route: "red, yellow, blue, green",
    },
    {
      stationName: "Richmond",
      Abbr: "rich",
      route: "red, orange",
    },
    {
      stationName: "Rockridge (Oakland)",
      Abbr: "rock",
      Route: "Yellow",
    },
    {
      stationName: "San Bruno",
      Abbr: "sbrn",
      route: "red, yellow",
    },
    {
      stationName: "San Francisco Int'l Airport",
      Abbr: "sfia",
      route: "yellow, red",
    },
    {
      stationName: "San Leandro",
      Abbr: "sanl",
      route: "blue, orange, green",
    },
    {
      stationName: "South Hayward",
      Abbr: "shay",
      route: "orange, green",
    },
    {
      stationName: "Union City",
      Abbr: "ucty",
      route: "orange, green",
    },
    {
      stationName: "Warm Springs/South Fremont",
      Abbr: "warm",
      route: "orange, green",
    },
    {
      stationName: "Walnut Creek",
      Abbr: "wcrk",
      route: "Yellow",
    },
    {
      stationName: "West Dublin",
      Abbr: "wdud",
      route: "",
    },
    {
      stationName: "West Oakland",
      Abbr: "woak",
      route: "red, yellow, blue, green",
    },
  ];


  $("#bart").on("click", stationSwap);


  function stationSwap() {
    destinystate = $(".destiny").val();

    indexDestiny = bartStationArray.findIndex((x) => x.Abbr === destinystate);
    console.log(indexDestiny);
    destinySpot = bartStationArray[indexDestiny].stationName;

    console.log(destinySpot);
    $("#thingsToDo").empty();
    $("#thingsToDo").append($("<p>").attr("class", "title").text("Places:"));
    initMap();
  }

});

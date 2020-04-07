$(document).ready(function () {
  var originstate = "";
  var destinystate = "";

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
      stationName: "Berryessa (Not Open Yet)",
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

  renderButtons();

  function renderButtons() {
    for (i = 0; i < bartStationArray.length; i++) {
      $(".destiny").append(
        $("<option>")
          .text(bartStationArray[i].stationName)
          .attr("value", bartStationArray[i].Abbr)
      );
      $(".origin").append(
        $("<option>")
          .text(bartStationArray[i].stationName)
          .attr("value", bartStationArray[i].Abbr)
      );
    }
  }
  $("#bart").on("click", submission);
  function submission() {
    $("#realTime").empty();
    destinystate = $(".destiny").val();
    originstate = $(".origin").val();

    indexDestiny = bartStationArray.findIndex((x) => x.Abbr === destinystate);
    indexOrigin = bartStationArray.findIndex((x) => x.Abbr === originstate);
    console.log(indexOrigin);
    console.log(indexDestiny);
    originalSin = bartStationArray[indexOrigin].Abbr;
    destinySin = bartStationArray[indexDestiny].Abbr;
    console.log(originalSin);
    console.log(destinySin);
    var routeUrl = `https://community-bart.p.rapidapi.com/sched.aspx?dest=${destinySin}&orig=${originalSin}&cmd=arrive&json=y`;
    var settings = {
      async: true,
      crossDomain: true,
      url: routeUrl,
      method: "GET",
      headers: {
        "x-rapidapi-host": "community-bart.p.rapidapi.com",
        "x-rapidapi-key": "4d3c51060amsh0a0695795b6f4ccp143077jsn20c66162ae11",
      },
    };
    $.ajax(settings).done(function (response) {
      console.log(response);
      titlery = $("<h2>").text("Real Time Departures:");
      $("#realTime").append(titlery);
      arrayOfColors = [
        "green button",
        "yellow button",
        "blue button",
        "grey button",
      ];
      for (i = 0; i < 4; i++) {
        var fare = response.root.schedule.request.trip[i]["@fare"];
        var orig = response.root.schedule.request.trip[i]["@origTimeMin"];
        var dest = response.root.schedule.request.trip[i]["@destTimeMin"];
        var tt = response.root.schedule.request.trip[i]["@tripTime"];
        div1 = $("<div>").attr("class", `ui segment ${arrayOfColors[i]}`);
        p1 = $("<p>").text("Fare Price:" + " " + fare);
        p2 = $("<p>").text("Departing Time:" + " " + orig);
        p3 = $("<p>").text("Arrival Time:" + " " + dest);
        p4 = $("<p>").text("Travel Time:" + " " + tt + " " + 'min');
        console.log(fare);
        console.log(orig);
        div1.append(p1);
        div1.append(p2);
        div1.append(p3);
        div1.append(p4);
        $("#realTime").append(div1);
      }
    });
  }
});

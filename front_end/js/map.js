var currentLayer="baseStyle";

// the green space variable
var green=0;

//walkscore

var walkscore=0;

//home

var home=0;

//house

var house=0;

//rent

var rent=0;
var legend = L.control({position: 'bottomright'});
var map = L.map('map').setView([53.53, -113.50], 11);
var layer;
var gray = L.esri.basemapLayer('Gray'),
    topo = L.esri.basemapLayer('Topographic'),
    Stamen_Watercolor = L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
        attribution: '',
        subdomains: 'abcd',
        minZoom: 1,
        maxZoom: 16
    });

gray.addTo(map);

var school = L.icon({
    iconUrl: './img/school.svg',
iconSize:     [15, 15], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0]
});
var gas = L.icon({
    iconUrl: './img/gas.svg',iconSize:     [15, 15], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0]
});
var culture = L.icon({
    iconUrl: './img/cult.svg',iconSize:     [15, 15], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0]
});
var grocery = L.icon({
    iconUrl: './img/grocery.svg',iconSize:     [15, 15], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0]
});
var hosp = L.icon({
    iconUrl: './img/hosp.svg',iconSize:     [15, 15], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0]
});
var park = L.icon({
    iconUrl: './img/park.svg',iconSize:     [15, 15], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0]
});
var police = L.icon({
    iconUrl: './img/police.svg',iconSize:     [15, 15], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0]
});

var sorry_message = "<p>Due to time constraints in this challenge we were unable to implement all the planned features of CODE.</p><p> But check back later and use your imagination in the meantime. This box would show you things like this place name, address, website, some basic info.</p>";

var ed_hosplyr =  new L.geoJson(ed_hosp, {
        
        pointToLayer: function (feature, latlng) {
             var pop = '<b>Local Health Facility:</b> '+sorry_message;
            return L.marker(latlng, {icon: hosp}).bindPopup(pop);
        }
});

var ed_greelyr =  new L.geoJson(ed_gree, {
        
        pointToLayer: function (feature, latlng) {
            var pop = '<b>Local Parks and Green Space:</b> '+sorry_message;
            return L.marker(latlng, {icon: park}).bindPopup(pop);
        }
}) ;

var ed_scholyr =  new L.geoJson(ed_scho, {
        
        pointToLayer: function (feature, latlng) {
            var pop = '<b>Local Schools and Libraries:</b> '+sorry_message;
            return L.marker(latlng, {icon: school}).bindPopup(pop);
        }
}) ;

var ed_cultlyr =  new L.geoJson(ed_cult, {
        
        pointToLayer: function (feature, latlng) {
            var pop = '<b>Local Cultural Facilities:</b> '+sorry_message;
            return L.marker(latlng, {icon: culture}).bindPopup(pop);
        }
}) ;

var ed_groclyr =  new L.geoJson(ed_groc, {
        
        pointToLayer: function (feature, latlng) {
            var pop = '<b>Local Food Banks, Grocery Stores, and Markets:</b> '+sorry_message;
            return L.marker(latlng, {icon: grocery}).bindPopup(pop);
        }
}) ;

var ed_gaslyr =  new L.geoJson(ed_gas, {
        
        pointToLayer: function (feature, latlng) {
            var pop = '<b>Local Gas Stations:</b> '+sorry_message;
            return L.marker(latlng, {icon: gas}).bindPopup(pop);
        }
}) ;

var ed_emerlyr =  new L.geoJson(ed_emer, {
        
        pointToLayer: function (feature, latlng) {
            var pop = '<b>Local Emergency Services:</b> '+sorry_message;
            return L.marker(latlng, {icon: police}).bindPopup(pop);
        }
});


function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

        function style(feature) {
            return {
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7,
                fillColor: getColor(feature.properties.density)
            };
        }

function incColor(d) {
    return d >= 0 & d < 20500 ? '#ffffd4' :
        d >= 20500 & d < 30870 ? '#fed98e' :
        d >= 30870 & d < 38683 ? '#fe9929' :
        d >= 38683 & d < 50862 ? '#d95f0e' :
        d >= 50862 ? '#993404' : '#993404';    
}    

function incStyle(feature) {
    return {
        fillColor: incColor(feature.properties.Avg_Inc),
        fillOpacity: 0.6,
        color: 'black',
        weight: 1
    };
}

    function rentColor (d) {
        return d >= 0 & d < 626 ? '#fef0d9' :
            d >= 626 & d < 833 ? '#fc8d59' :
            d >= 833 & d <1026 ? '#fdcc8a' :
            d >= 1026 & d < 1354 ? '#e34a33' :
            d >= 2275 ? '#b30000' : '#b30000';
    }

    function rentStyle(feature) {
        return {
            fillColor: rentColor(feature.properties.Med_Rent),
            fillOpacity: 0.4,
            color: 'black',
            weight: 1
        };
    }
    function popColor(d) {
        return d >= 0 & d < 700 ? '#edf8fb' :
            d >= 700 & d < 1300 ? '#b3cde3' :
            d >= 1300 & d < 3000? '#8c96c6' :
            d >= 6000 & d < 13000 ? '#8856a7' :
            d >= 13000 ? '#810f7c' : '#edf8fb';
    }

    function popStyle(feature) {
        return {
            fillColor: popColor(feature.properties.Tot_Pop),
            fillOpacity: 0.6,
            color: 'black',
            weight: 1
        };
    }

    function greenColor(d) {
        return d >= 0 & d < 0.2 ? '#ffffcc' :
            d >= 0.2 & d < 0.6 ? '#c2e699' :
            d >= 0.6 & d < 5 ? '#78c679' :
            d >= 5 & d < 18 ? '#31a354' :
            d >= 18 ? '#006837' : '#006837';
    }

    function greenStyle(feature) {
        return {
            fillColor: greenColor(feature.properties['%_Green_Sp']),
            fillOpacity: 0.6,
            color: 'black',
            weight: 1
        };
    }

    function houseColor(d) {
        return d >= 0 & d < 12 ? '#eff3ff' :
            d >= 12 & d < 40 ? '#bdd7e7' :
            d >= 40 & d < 65 ? '#6baed6' :
            d >= 65 & d < 83 ? '#3182bd' :
            d >= 83 ? '#08519c' : '#aaaaaa';
    }

    function houseStyle(feature) {
        return {
            fillColor: houseColor(feature.properties['%_Owned']),
            fillOpacity: 0.6,
            color: 'black',
            weight: 1
        };
    }

    function walkColor(d) {
        return d >= 0 & d < 12 ? '#edf8e9' :
            d >= 10 & d < 40 ? '#bae4b3' :
            d >= 20 & d < 65 ? '#74c476' :
            d >= 55 & d < 83 ? '#31a354' :
            d >= 90 ? '#006d2c' : '#006d2c';
    }

    function walkStyle(feature) {
        return {
            fillColor: walkColor(feature.properties.Walkscore),
            fillOpacity: 0.6,
            color: 'black',
            weight: 1
        };
    }
    function valueColor(d) {
        return d >= 0 & d < 396153 ? '#fef0d9' :
            d >= 396153 & d < 748872 ? '#fdcc8a' :
            d >= 748872 & d < 1101844? '#fc8d59' :
            d >= 1101844 & d < 1456372 ? '#e34a33' :
            d >= 1456372 ? '#b30000' : '#b30000';
    }

    function valueStyle(feature) {
        return {
            fillColor: valueColor(feature.properties.Avg_Home_V),
            fillOpacity: 0.4,
            color: 'black',
            weight: 1
        };
    }

    function totPopcolor(d) {
        return d >= 0 & d < 700 ? '#ffffd4' :
            d >= 700 & d < 1300 ? '#fed98e' :
            d >= 1300 & d < 3000? '#fe9929' :
            d >= 6000 & d < 13000 ? '#d95f0e' :
            d >= 13000 ? '#993404' : '#FFEDA0';
    }

    function totpopstyle(feature) {
        return {
            fillColor: totPopcolor(feature.properties.Tot_Pop),
            fillOpacity: 0.6,
            color: 'black',
            weight: 1
        };
    }

    function baseStyle(feature) {
        return {
            fillColor: '#92c5de',
            fillOpacity: 0.6,
            color: 'black',
            weight: 1
        };
    }

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
 info.update(layer.feature.properties);
}

function resetHighlight(e) {
    layer.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}
   
function onEachFeature(feature, layer) {
   green=feature.properties['%_Green_Sp'];
   walkscore=feature.properties.Walkscore;
   home=feature.properties['%_Owned'];
   house=feature.properties.Avg_Home_V;
   rent=feature.properties.Med_Rent;
   
   var temptext="";
   
   if (currentLayer=="greenStyle")
   {
     temptext=green;
   }
   if (currentLayer=="houseStyle")
   {
     temptext=home;
   }
   if (currentLayer=="walkStyle")
   {
     temptext=walkscore;
   }
   if (currentLayer=="valueStyle")
   {
     temptext=house;
   }
   if (currentLayer=="rentStyle")
   {
     temptext=rent;
   }
    layer.bindPopup(
  // 'This community has '+temptext+'<br>'
   '<div id="chart_div" width="400" height="400"/>'
 
  );
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature,
        click: showGraph
    });
}

function showGraph()
{
  if (currentLayer=="greenStyle")
   {
     showGraph1();
   }
   if (currentLayer=="houseStyle")
   {
     showGraph2();
   }
   if (currentLayer=="walkStyle")
   {
     showGraph3();
   }
   if (currentLayer=="valueStyle")
   {
     showGraph4();
   }
   if (currentLayer=="rentStyle")
   {
     showGraph5();
   }
}

// draw green space
function showGraph1(){
  map.on('popupopen', function() {
     // Create the data table.


     
var data = google.visualization.arrayToDataTable([
          ['Product', 'Score', { role: 'style' }],
          ['Avg',  28, 'green'],
          ['Community',  green, 'blue'],
          ['Max',  120, 'red']
        ]);


        // Set chart options
        var options = {'title':'Community Green Space',
                       'width':400,
                       'height':300,
                       'legend': 'none'};
 var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      
    
    });
  }

//homeowned

function showGraph2(){
  map.on('popupopen', function() {
     // Create the data table.
     
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Percentage');
        data.addRows([
          ['Average', 55],
          ['Community', home],
          ['Max', 100]
        ]);

        // Set chart options
        var options = {'title':'Community Home Ownership Percentage',
                       'width':400,
                       'height':300};
 var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      
    
    });
  }

//walkscore

function showGraph3(){
  map.on('popupopen', function() {
     // Create the data table.
     
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Score');
        data.addRows([
          ['Average', 6],
          ['Community', walkscore],
          ['Max', 100]
        ]);

        // Set chart options
        var options = {'title':'Community Walkability',
                       'width':400,
                       'height':300};
 var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      
    
    });
  }
//house value

function showGraph4(){
  map.on('popupopen', function() {
     // Create the data table.
     
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Thousand Dollars');
        data.addRows([
          ['Average', 304],
          ['Community', house],
          ['Max', 824]
        ]);

        // Set chart options
        var options = {'title':'Community Home Values',
                       'width':400,
                       'height':300};
 var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      
    
    });
  }
  // average rent
  function showGraph5(){
  map.on('popupopen', function() {
     // Create the data table.
     
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Dollars');
        data.addRows([
          ['Average', 1176],
          ['Community', rent],
          ['Max', 2374]
        ]);

        // Set chart options
        var options = {'title':'Community Rental Rates',
                       'width':400,
                       'height':300};
 var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      
    
    });
  }


var searchControl = new L.esri.Geocoding.Controls.Geosearch()
    .addTo(map);
var results = new L.LayerGroup()
    .addTo(map);

searchControl.on('results', function(data) {
    results.clearLayers();
    for (var i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
        results.clearLayers();
    }
});

var info = L.control();
    info.onAdd = function(map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };
    // method that we will use to update the control based on feature properties passed
    info.update = function(props) {
        this._div.innerHTML = '<h4>Community Info</h4>' + (props ? '<b>' + props.CSDNAME + '</b><br />' + 'Age 0-19: '+ '<b>' +props['Age_19_>']+ '</b><br />' + 'Age 20-35: '+ '<b>' +props['Age_20_34']+'</b><br />' + 'Age 35-54: '+ '<b>' +props['Age_35_54']+'</b><br />'+ 'Age 55 < Above: '+ '<b>'  +props['Age_55_<']+' ': 'Select Your Community');
    };



    info.addTo(map);
    var sidebar = $('#sidebar')
        .sidebar();

function layerRemove(){
    map.removeLayer(layer);
    //map.removeControl(legend);
    };
var legend = L.control({position: 'bottomright'});

function hideLegend() {
    map.removeControl(legend);
}


 layer =  L.geoJson(edmon_data, {
            style: baseStyle,
            onEachFeature: onEachFeature
        }).addTo(map);

function layerAddGre(){
     document.getElementById("varb_explain").innerHTML = "This map indicates the total percentage of greenspace available in each of community areas within your city.";
     layer =  L.geoJson(edmon_data, {
            style: greenStyle,
            onEachFeature: onEachFeature
        }).addTo(map);
     currentLayer = "greenStyle";
     graph = [0,0.2,10,15,20];
     lcolor=greenColor;
    };


function layerAddHomeVal(){
     document.getElementById("varb_explain").innerHTML = "This map indicates the median home values in your community area.";

     layer =  L.geoJson(edmon_data, {
            style: valueStyle,
            onEachFeature: onEachFeature
        }).addTo(map);
          currentLayer = "valueStyle";
          graph = [0,396153,748872,1101844,1456372];
          lcolor=valueColor;
    };


function layerAddWalk(){
    document.getElementById("varb_explain").innerHTML = "This map indicates the walkability of community areas within your city.";
     layer =  L.geoJson(edmon_data, {
            style: walkStyle,
            onEachFeature: onEachFeature
        }).addTo(map);
          currentLayer = "walkStyle";
          graph = [0,20,40,50,90];
          lcolor = walkColor;
    };

function layerAddHomeown(){
document.getElementById("varb_explain").innerHTML = "This map indicates the percent of home ownership in each community within your city.";
     layer =  L.geoJson(edmon_data, {
            style: houseStyle,
            onEachFeature: onEachFeature
        }).addTo(map);
          currentLayer = "houseStyle";
          graph = [0,12,40,65,83];
          lcolor = houseColor;
    };

function layerAddInc(){
    document.getElementById("varb_explain").innerHTML = "This map indicates the average household income in each of the community areas within your city.";
     
     layer =  L.geoJson(edmon_data, {
            style: incStyle,
            onEachFeature: onEachFeature
        }).addTo(map);
          currentLayer = "greenStyle";
          graph = [0,20500,30870,38683,50862];
          lcolor = incColor;
    };


function layerAddRent(){
    document.getElementById("varb_explain").innerHTML = "This map indicates the average rent values in each of the community areas within your city.";
    layer =  L.geoJson(edmon_data, {
            style: rentStyle,
            onEachFeature: onEachFeature
        }).addTo(map);
         currentLayer = "greenStyle";
         graph = [0,626,883,1026,2275];
         lcolor = rentColor;
    };

function layerAddPop(){
document.getElementById("varb_explain").innerHTML = "This map indicates the population in each of the community areas within your city.";
     
    layer =  L.geoJson(edmon_data, {
            style: popStyle,
            onEachFeature: onEachFeature
        }).addTo(map);
    graph = [0,700,1300,6000,13000];
    hideLegend;
    };

var base = L.layerGroup([layer]);
var hosp = L.layerGroup([ed_hosplyr]);
var park = L.layerGroup([ed_greelyr]);
var school = L.layerGroup([ed_scholyr]);
var culture = L.layerGroup([ed_cultlyr]);
var grocery = L.layerGroup([ed_groclyr]);
var gas = L.layerGroup([ed_gaslyr]);
var police = L.layerGroup([ed_emerlyr]);
var baseMaps = {
        "Grayscale": gray,
        "Streets": topo,
        "Colorful": Stamen_Watercolor
    };

var overlayMaps = {

        "Hospitals": hosp,
        "Schools": school,
        "Emergency Services": police,
        "Parks": park,
        "Cultural Features": culture,
        "Gas Stations": gas
    };
var layerControl = L.control.layers(baseMaps,overlayMaps, {
        collapsed: false
    });

layerControl.addTo(map);
    layerControl._container.remove();
    document.getElementById('settings')
        .appendChild(layerControl.onAdd(map, {
            collapsed: false
        }));

function showLegend(){
legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = graph,
        labels = [];
        legendColor = lcolor

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + legendColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};
legend.addTo(map);
}
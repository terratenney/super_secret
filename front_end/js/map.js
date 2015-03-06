
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



var healthIcon = L.icon({
    iconUrl: '/img/city-hospital-icon.png',

    iconSize:     [15, 15], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
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



    function greenspacecolor(d) {
        return d >= 0 & d < 2 ? '#edf8fb' :
            d >= 2 & d < 6 ? '#b2e2e2' :
            d >= 6 & d < 10 ? '#66c2a4' :
            d >= 10 & d < 18 ? '#2ca25f' :
            d >= 18 ? '#006d2c' : '#aaaaaa';
    }

    function greenspacestyle(feature) {
        return {
            fillColor: greenspacecolor(feature.properties['%_Green_Sp']),
            fillOpacity: 0.6,
            color: 'black',
            weight: 1

        };
    }

function HomeOwnedColor(d) {
        return d >= 0 & d < 12 ? '#eff3ff' :
            d >= 12 & d < 40 ? '#bdd7e7' :
            d >= 40 & d < 65 ? '#6baed6' :
            d >= 65 & d < 83 ? '#3182bd' :
            d >= 83 ? '#08519c' : '#aaaaaa';
    }

    function homeownedstyle(feature) {
        return {
            fillColor: HomeOwnedColor(feature.properties['%_Owned']),
            fillOpacity: 0.6,
            color: 'black',
            weight: 1

        };
    }



    function walkscoreColor(d) {
        return d >= 0 & d < 12 ? '#feebe2wal' :
            d >= 12 & d < 40 ? '#fbb4b9' :
            d >= 40 & d < 65 ? '#f768a1' :
            d >= 65 & d < 83 ? '#c51b8a' :
            d >= 83 ? '#7a0177' : '#aaaaaa';
    }

    function walkscorestyle(feature) {
        return {
            fillColor: walkscoreColor(feature.properties.Walkscore),
            fillOpacity: 0.6,
            color: 'black',
            weight: 1

        };
    }
    function housevaluescolor(d) {
        return d >= 0 & d < 131433 ? '#ffffcc' :
            d >= 131433 & d < 312580 ? '#ffeda0' :
            d >= 312580 & d < 433296? '#fd8d3c' :
            d >= 433296 & d < 568988 ? '#e31a1c' :
            d >= 568988 ? '#800026' : '#FFEDA0';
    }

    function housevalstyle(feature) {
        return {
            fillColor: housevaluescolor(feature.properties.Avg_Home_V),
            fillOpacity: 0.4,
            color: 'black',
            weight: 1

        };
    }

    function rent(d) {
        return d >= 0 & d < 200 ? '#ffffcc' :
            d >= 201 & d < 550 ? '#ffeda0' :
            d >= 651 & d <850 ? '#fd8d3c' :
            d >= 851 & d < 1000 ? '#e31a1c' :
            d >= 1001 ? '#800026' : '#FFEDA0';
    }

    function rentstyle(feature) {
        return {
            fillColor: rent(feature.properties.Avg_Home_V),
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

    function avgInccolor(d) {
        return d >= 0 & d < 20500 ? '#fee5d9' :
            d >= 20500 & d < 30870 ? '#fcae91' :
            d >= 30870 & d < 38683 ? '#fb6a4a' :
            d >= 38683 & d < 50862 ? '#de2d26' :
            d >= 50862 ? '#a50f15' : '#FFEDA0';
    }

    function avgincstyle(feature) {
        return {
            fillColor: avgInccolor(feature.properties.Avg_Inc),
            fillOpacity: 0.6,
            color: 'black',
            weight: 1

        };
    }

    function basestyle(feature) {
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
   
    layer.bindPopup("I am a test " + feature.properties.Med_Inc);
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
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
    };


 layer =  L.geoJson(edmon_data, {
            style: totpopstyle,
            onEachFeature: onEachFeature
        }).addTo(map);

function layerAddGre(){
     document.getElementById("varb_explain").innerHTML = "This map indicates the total percentage of greenspace available in each of the community areas within your city.";
     layer =  L.geoJson(edmon_data, {
            style: greenspacestyle,
            onEachFeature: onEachFeature
        }).addTo(map);
    };


function layerAddHome(){
     document.getElementById("varb_explain").innerHTML = "This map indicates the median home values in your community area.";

     layer =  L.geoJson(edmon_data, {
            style: homeownedstyle,
            onEachFeature: onEachFeature
        }).addTo(map);
    };


function layerAddWalk(){

     layer =  L.geoJson(edmon_data, {
            style: walkscorestyle,
            onEachFeature: onEachFeature
        }).addTo(map);
    };
function layerAddHomeVal(){

     layer =  L.geoJson(edmon_data, {
            style: housevalstyle,
            onEachFeature: onEachFeature
        }).addTo(map);
    };


function layerAddRent(){

    layer =  L.geoJson(edmon_data, {
            style: rentstyle,
            onEachFeature: onEachFeature
        }).addTo(map);
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





var grades = {'grades':[0, 12000, 20000, 25000, 35000, 45000, 50000]};
var legend = L.control();
/*
function make_legend(map,grades) {
    console.log(grades.grades);
    var div = L.DomUtil.create('div', 'info legend'),
    grades = grades.grades,
    labels = [];
        for (var i = 0; i < grades.length; i++) {div.innerHTML +='<i            style="background:' + getColor(grades[i] + 1) + '"></i> ' + grades[i]           + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');}
            return div;
    };

legend.onAdd = make_legend();
*/


legend.addTo(map);
legend._container.remove();
document.getElementById('messages')
        .appendChild(legend.onAdd(map));	



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
            d >= 626 & d < 833 ? '#fdcc8a' :
            d >= 833 & d <1026 ? '#fc8d59' :
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

    function valueColor(d) {
        return d >= 0 & d < 12 ? '#eff3ff' :
            d >= 12 & d < 40 ? '#bdd7e7' :
            d >= 40 & d < 65 ? '#6baed6' :
            d >= 65 & d < 83 ? '#3182bd' :
            d >= 83 ? '#08519c' : '#aaaaaa';
    }

    function valueStyle(feature) {
        return {
            fillColor: valueColor(feature.properties['%_Owned']),
            fillOpacity: 0.6,
            color: 'black',
            weight: 1

        };
    }

    function walkColor(d) {
        return d >= 0 & d < 12 ? '#edf8e9' :
            d >= 12 & d < 40 ? '#bae4b3' :
            d >= 40 & d < 65 ? '#74c476' :
            d >= 65 & d < 83 ? '#31a354' :
            d >= 83 ? '#006d2c' : '#006d2c';
    }

    function walkStyle(feature) {
        return {
            fillColor: walkColor(feature.properties.Walkscore),
            fillOpacity: 0.6,
            color: 'black',
            weight: 1

        };
    }
    function houseColor(d) {
        return d >= 0 & d < 396153 ? '#fef0d9' :
            d >= 396153 & d < 748872 ? '#fdcc8a' :
            d >= 748872 & d < 1101844? '#fc8d59' :
            d >= 1101844 & d < 1456372 ? '#e34a33' :
            d >= 1456372 ? '#b30000' : '#b30000';
    }

    function houseStyle(feature) {
        return {
            fillColor: houseColor(feature.properties.Avg_Home_V),
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
            style: basestyle,
            onEachFeature: onEachFeature
        }).addTo(map);

function layerAddGre(){
     document.getElementById("varb_explain").innerHTML = "This map indicates the total percentage of greenspace available in each of the community areas within your city.";
     layer =  L.geoJson(edmon_data, {
            style: greenStyle,
            onEachFeature: onEachFeature
        }).addTo(map);
    };


function layerAddHome(){
     document.getElementById("varb_explain").innerHTML = "This map indicates the median home values in your community area.";

     layer =  L.geoJson(edmon_data, {
            style: houseStyle,
            onEachFeature: onEachFeature
        }).addTo(map);
    };


function layerAddWalk(){

     layer =  L.geoJson(edmon_data, {
            style: walkStyle,
            onEachFeature: onEachFeature
        }).addTo(map);
    };
function layerAddHomeVal(){

     layer =  L.geoJson(edmon_data, {
            style: valueStyle,
            onEachFeature: onEachFeature
        }).addTo(map);
    };


function layerAddRent(){

    layer =  L.geoJson(edmon_data, {
            style: rentStyle,
            onEachFeature: onEachFeature
        }).addTo(map);
    };

function layerAddPop(){

    layer =  L.geoJson(edmon_data, {
            style: popStyle,
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


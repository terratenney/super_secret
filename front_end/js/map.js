$(document).ready(function() {

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



function getColor(d) {
        return d > 45000 ? '#800026' :
            d > 35000 ? '#BD0026' :
            d > 25000 ? '#E31A1C' :
            d > 20000 ? '#FC4E2A' :
            d > 15000 ? '#FD8D3C' :
            d > 10000 ? '#FEB24C' :
            d >  0 ? '#FED976' : '#FFEDA0';
    }

function style(feature) {
	
        return {
            fillColor: getColor(feature.properties.Med_Inc_F),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
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

var layer = new L.geoJson(edmon_data, {
            style: style,
            onEachFeature: onEachFeature
        }).addTo(map);




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
        this._div.innerHTML = '<h4>Community Info</h4>' + (props ? '<b>' + props.CMANAME + '</b><br />' + props.CDNAME + ' ' : 'Select Your Community');
    };



    info.addTo(map);
    var sidebar = $('#sidebar')
        .sidebar();

var healthIcon = L.icon({
    iconUrl: '/img/city-hospital-icon.png',

    iconSize:     [15, 15], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});




var ed_hosplyr =  new L.geoJson(ed_hosp, {
        
        pointToLayer: function (feature, latlng) {
            var pop = ' Kind of Health Facility: '+feature.properties.SV_NAME;
            return L.marker(latlng, {icon: healthIcon}).bindPopup(pop);
        }
}).addTo(map);



var base = L.layerGroup([layer]);
var health = L.layerGroup([layer,ed_hosplyr]);

var baseMaps = {
        "Grayscale": gray,
        "Streets": topo,
        "Colorful": Stamen_Watercolor
    };


var overlayMaps = {
        "Dissemination Areas": base,
        "Health": health
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

function make_legend(map,grades) {
    console.log(grades.grades);
    var div = L.DomUtil.create('div', 'info legend'),
    grades = grades.grades,
    labels = [];
        for (var i = 0; i < grades.length; i++) {div.innerHTML +='<i            style="background:' + getColor(grades[i] + 1) + '"></i> ' + grades[i]           + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');}
            return div;
    };

legend.onAdd = make_legend(map,grades);



legend.addTo(map);
legend._container.remove();
document.getElementById('messages')
        .appendChild(legend.onAdd(map));	




});


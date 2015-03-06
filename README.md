# This file describes Version 1.0 of Community Open-Data Engage (CODE)

----
## What is CODE?
see [ESRI](http://www.esri.ca/en)

> CODE is an application designed to help facilitate a better understanding of the neighbourhoods we live in through open-data. It provides a tool for citizens to explore and make sense of their community through neighborhood profiles. It also provides a platform for citizens to engage with each other through social media and voluneteered content. 

> CODE consists of three core components: a visualization interface, social media tool, and content generator.

----
## Usage
1. Visit our user interface [here] (http://www.code.ca/en).
2. Alternatively, visit our GitHub repoistory [here](https://github.com/terratenney/super_secret).

----
## Components

**Geospatial Data Viewer:**

CODE pulls community oriented spatial information from the following open-data portals.

>[City of Vancouver Open Data Catalogue] (http://vancouver.ca/your-government/open-data-catalogue.aspx)

>[City of Edmonton Open Data Catalogue] (https://data.edmonton.ca/)

>[Open Data Government of Canada] (http://open.canada.ca/en/open-data)

CODE then dynamically runs pre-defined spatial and network analysis, and pushes the results into the UI. Users toggle between different layers and explore statistical and text descriptions of neighbourhoods.

*Included Layers*

* Demographic information (income, age, education levels, house values)
* Emergency services
* Hospitals and medical centres
* Schools
* Cultural facilities
* Parks
* Gas Stations
* Grocery Stores

**Community Input**

This component allows users to input their own spatial information or comment on existing features. Once a message has been reviewed and accepted by the admin, it will be visible within the interface to all users as a separate “community input” layer.

**Community Discussion**

The social-media component is a search app that lets you see who is tweeting in your area and easily send them a message to interact with local citizens. This tool facilitates productive discussion on important community topics.

##Technical Components (need to finish this section)
We wrote several python scripts to automatically download shapefiles direct from open-data repositories. Next, fac_count.py and route_finder are used to run network analysis to closest facilities, count community features within each neighbourhood, and calculate the percent green space of community extents. We then use shapefiletogeojson to output as json or .js files.

##CODE code

When a user specifies a community indicator, a newly styled layer will appear using the following code:

    layer =  L.geoJson(edmon_data, {
          style: houseStyle,
          onEachFeature: onEachFeature
      }).addTo(map);
        currentLayer = "houseStyle";
     };

Interactivity is enabled through the following options 
    
    onEachFeature(feature, layer){
    showGraph();
    zoomtoFeature();
    highlightFeature();
    resetHighlight();
    }

### Assumptions
Pop-up balloons can be customized to display whatever attributes are needed

###Known Bugs
Legends do not appear and/or change in Vancouver map
Graphs in pop-up balloons are prone to fail
   

## Bug Reporting

You can send CODE bug reports to <bug-code@engage.ca>.

**Copyright (C) 2015 Matthew Tenney, Jin Xing, and Carl Hughes**

This file is part of our lab.

CODE is a free application; you can redistribute it and/or modify it. CODE is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
A PARTICULAR PURPOSE.

----
## changelog
* 4-Mar-2015 created

----
## thanks
* [ESRI Canada](http://www.esri.ca/en)
* [GIC (McGill University)](http://gic.geog.mcgill.ca/)
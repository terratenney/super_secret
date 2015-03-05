# This file describes Version 1.0 of Community Open-Data Engage (CODE)

----
## What is CODE?
see [ESRI](http://www.esri.ca/en)

> CODE is an application designed to help facilitate a better understanding of the neighbourhoods we live in through open-data. It provides a tool for citizens to explore and make sense of their community through comprehensive neighborhood profiles. It also provides a platform for citizens to engage with each other through social media and voluneteered content. 

> CODE consists of three core components: an interactive visualization to explore spatial data; a community feedback tool to share comments and critical input with fellow citizens and cities; and a social media plug-in to participate in real-time community based Twitter discussions.

----
## Usage
1. Visit our user interface [here] (http://www.code.ca/en).
2. Alternatively, visit our GitHub repoistory [here](https://github.com/terratenney/super_secret).

----
## Sub-modules

**Geospatial Data Viewer:**

CODE pulls community oriented spatial information from open-data portals provided by local and national governments.

>[City of Vancouver Open Data Catalogue] (http://vancouver.ca/your-government/open-data-catalogue.aspx)

>[City of Edmonton Open Data Catalogue] (https://data.edmonton.ca/)

>[Open Data Government of Canada] (http://open.canada.ca/en/open-data)

CODE then dynamically runs pre-defined spatial and network analysis and pushes the results into the UI. Users can toggle between different layers and explore statistical and text descriptions of neighbourhood features inside a descriptive balloon.

**Community Input**

This component allows users to input their own spatial information or comment on existing features. Once a message has been reviewed and accepted by the admin, it will be visible within the interface to all users as a separate “community input” layer.

**Community Discussion**

The social-media component is a search app that lets you see who is tweeting in your area and easily send them a message to interact with local citizens. This tool facilitates productive discussion on important community topics.

##Technical Components (need to finish this section)
We use the X web-parser to download shapefiles direct from their unique open-data repositories. Next, Y.py is used to run network analysis to closest facilities, count community features within each neighbourhood, and calculate the percent green space of community extents. The resulting json files are used as inputs for the visualization component.

X.py is used to scrape census data to describe neighbourhood demographic data. This data is then graphed using D3 within pop-up balloons that appear when a neighbourhood is clicked.


##CODE code

    several snippits of code go here
    and here
    and here

## Bug Reporting

You can send CODE bug reports to <bug-code@engage.ca>.

You can also search for existing bugs here:

  [List of bugs] (http://url.html)

If you need help using CODE, try these forums:

  * [Forum 1] (http://url.html)

  * [Forum 2] (http://url.html)
  * [Forum 3] (http://url.html)


**Copyright (C) 2015 Matthew Tenney, Jin Xing, and Carl Hughes**

This file is part of our lab.

CODE is a free application; you can redistribute it and/or modify it under the terms of the General Public License as published by the Free Software
Foundation; either version 3 of the License, or (at your option) any later
version.

CODE is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
A PARTICULAR PURPOSE.

----
## changelog
* 4-Mar-2015 created

----
## thanks
* [ESRI Canada](http://www.esri.ca/en)
* [GIC (McGill University)](http://gic.geog.mcgill.ca/)

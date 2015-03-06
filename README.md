# Welcom to Community Open-Data Engage (CODE)

----
## What is CODE?
Run Our Live Demo [HERE](http://www.esri.ca/en)

> CODE is an application designed to help citizens better understand the neighbourhoods we live in through open-data. For this app challenge - we tried to cut across all of the themes and connect the techniques often left to geographers (i.e, spatial analysis) with the ideas of neogeography (Turner 2006).   


#Theory Behind CODE
> “They might be really good at making an app and taking near real time transit data and coming up with a beautiful app with a fantastic algorithm that will tell you within the millisecond how fast the bus is coming,” Tracy Lauriault, a postdoctoral researcher at the National Institute for Regional and Spatial Analysis (NIRSA), said. “But those aren’t the same people who will sit at a transit committee meeting.”

> While the power of data may be limitless (c.f., Kitchin 2014), the time and expertise most people have to 'wrangling' insights for this information is limited. So CODE aims to help bridge that gap and let anyone who wants to use open data to better engage with their community! 

> So CODE provides a tool for citizens to explore and make sense of their community through comprehensive neighborhood profiles. It also provides a platform for citizens to engage with each other through social media and voluneteered content that can help connect people in their local areas. While not all of the features CODE was intended to have are implemented you can see the basic ideas with our "community feedback tool" where people can share comments and critical input with fellow citizens and cities at specific locations; and a social media plug-in to find people around you and participate in real-time geo-community based discussions.

> Behind the scenes of CODE there are three core components: an interactive visualization to explore spatial data or the "front_end"; the anayltical tools and spatial analysis done in python using custom-made and Esri's GIS software; and of course you - the user. 

----
## To Engage Usage
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

While there is more description of the analysis we performed in the actual code files - we tried to follow common techniques in what we considered key geodemographic and socio-economic indicators. For example, we parsed massive Statistic Canada Topic Tables to integrate over 25 variables from the 2011 National Household Survey and feed them back to you through choropleth maps, graphs, and tables. There are many others - like green space availability around you, recreation facilities, access to healthcare, food deserts (food availability - not including 'unhealthy' fast-food) and many more.  

**Community Input**

As a part of CODE we wanted to make sure people had a way to connect with each other. So we intended to implement a feature which allows users to contribute ideas, concerns, or just comment in their area. Once a message has been reviewed and accepted by the admin, it will be visible within the interface to all users as a separate “community input” layer to show others what some are interested in at this particular area.

**Community Discussion**

The social-media component is a search app that lets you see who is tweeting in your area and easily send them a message to interact with "local tweeters". This tool will hopefully help produce stronger connections and stimulate discussion on important community topics.

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

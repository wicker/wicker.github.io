--- 
layout: post
title: Geomapping Olympus Mons, Mars
subcat: geology
image: /img/thumbs/geomars.png
description: USGS data of Olympus Mons, Mars. 
mathjax: true
---

I took a year of geology courses in hopes of getting a second Bachelor's in geology but eventually had to abandon it to focus full-time on the Master's in Computer Engineering. We had an assignment to use a program called ArcGIS (GIS stands for geographic information system and ArcGIS is an excellent tool for analyzing data) and I decided to do something with Mars. 

Olympus Mons is the most massive of the five shield volcanoes in the northwest region of Mars, called the Tharsis Bulge, which is thought to have been tectonically active until about twelve million years ago. The region is geologically the youngest on Mars and also includes Valles Marineris, a four thousand kilometer-long canyon. Because Olympus Mons perches on the northwest rim of this bulged, elevated region, the bedrock beneath the layers of lava forms a downslope from SE to NW. 

<div align="center" style="margin: 0 auto; width:260px;"> <img src="https://jenner.smugmug.com/Geology-Labs/i-NH3d3Q6/0/O/fossaesulci.png"></div>

I'm fascinated by the exploration of our solar system and yet I had no idea how much data is publicly available online. I chose this project to explore that data for my G207 Computer Based Physical Geology Laboratory at Portland State. I used maps of Olympus Mons from Google Mars and the U.S. Geological Service (USGS) to determine a study area, create a topographic profile for that downslope, highlight and label the structure of the shield volcano itself, and examine the outflow areas for indicators of compressional and extensional faulting that would have occurred because of the bedrock tilt.

First, the four million square kilometers of study area included both Olympus Mons itself and the area of flow deposits to the northwest. Shield volcanoes are common on Earth and form when magma breaks through the Earth's crust and successive eruptions lay down ever-thicker layers of basalt material to form the mountain. On Earth, our shield volcanoes generally form as part of a string because our plates move and each successive eruption occurs when another thin point in the layer is broken through. The hotspot doesn't move, only the plate above. This process is what formed, for example, the Hawaiian island chain. 

It's important to get a sense of scale because the region is impressive compared to any feature on Earth. At 21 km (65,000 ft or nearly 16 miles) tall and 500 km (1500 miles) wide, Olympus Mons is the tallest shield volcano in the solar system. It achieved this height in part because Mars lacks recent tectonic activity so there was no moving plate to carry Olympus Mons away from its hotspot. Mars also has negligible atmosphere, a third of our gravity, and is primarily affected by wind erosion instead of precipitation.

<div align="center" style="margin: 0 auto; width:310px;"> <img src="https://jenner.smugmug.com/Geology-Labs/i-nShwLnQ/0/O/materialstructure.png"></div>

Olympus Mons is a classic example of a shield volcano. The magma it produces is low-silica, high-temperature mafic lava, in this case basalt. The basalt is very thin and travels very far, forming lava channels and then tabular sheets past the steep cliffs called the scarp. 

I was unable to find a DEM image which retained its elevation data but the combination of Google Earth and some math yielded the topo line and profile below. The southeastern beginning of the line is at an elevation of about 1 km while the northwestern end is at about -3 km, a difference of 4 km (12 miles) in base elevation. 

<div align="center" style="margin: 0 auto; width: 260px;"> <img src="https://jenner.smugmug.com/Geology-Labs/i-j5Nmf2h/0/O/topoline.png"></div>

I produced a structural map to see if I could find wrinkle ridges to the southeast and graben to the northwest. Both were present in their expected areas, so I concentrated on the northwest aureole, highlighting the graben and slide zones that occur with a downslope tile, and created the map shown in Figure 4. There were two reasons to look at the geologic units for the region. First, there are clearly landforms rising out of lava and glacier flows that appeared to predate the volcanic activity of Olympus Mons. Second, looking at the type of bedrock or soils would give further clues about tendency to slide. The problem with Mars is that the data is still being collected with regard to bedrock but I first took the USGS map of geologic material and mapped it into my hillshade, limiting the study area to Olympus Mons and its aureole, but including more to the southeast against the ridge.

This map was the USGS i-1083 geologic map, which is a large-scale older map from the Viking orbiter/lander era of the 1970s, to identify the difference between regions. Figure 5 shows the different geologic units. Avy is young volcanic material with a fine striated texture. Hpr is rolling plains material, relatively level except at the contact zones where it meets the aureole material of AHa, in the form of hills and ridges. AHa is formed by formed by basalt flow from the volcano and local vents and fissures. Aps is smooth plains material, burying most underline topography. The map also showed clear fractures where the plains meet the hills. 

<div align="center" style="margin: 0 auto; width: 310px;"> <img src="https://jenner.smugmug.com/Geology-Labs/i-kVkNc4x/0/O/geologic-map.png"></div>

The second set of data I used defined the aureole and the plains more closely, which have already been established to contain graben, but was valuable for showing the southeast section of the flows where material has clearly fractured upon impact with the ridge. The fracture lines can be seen in Figure 5 as well, but here the hillshade delineates the edge of the flow very clearly.

The floodplain of this aureole is very clear. 

<div align="center" style="margin: 0 auto; width: 430px"> <img src="https://jenner.smugmug.com/Geology-Labs/i-4phMvSQ/0/O/study-area2.png"></div>

This project gave me an introduction to using ArcGIS layers to examine geologic features. The extensive data can be used to calculate the extent of the flows, such as that of the aureole above; the size of lava and glacial lobes, the ratio of dimensions can be clues to flow speed; the location of lava tubes and caves, which influences flow patterns; and the underlying sediment and bedrock, which holds clues to the geochronology of the region.


#####References

USGS Planetary GIS Web Server (PIGWAD)
<a href="http://webgis.wr.usgs.gov/pigwad/maps/mars.htm">http://webgis.wr.usgs.gov/pigwad/maps/mars.htm</a>

Google Mars
<a href="http://mars.google.com">http://mars.google.com/</a>

USGS I-1083: Geologic Map of Mars
<a href="http://www.lpi.usra.edu/resources/mars_maps/1083/">http://www.lpi.usra.edu/resources/mars_maps/1083/</a>


---
layout: page
title:  
permalink: /travels/
---

<div class="container"> 
{% assign thisyear = 'now' | date: "%Y" %}
{% assign firstyear = true %}
{% assign counter = 0 %}

{% for post in site.categories.travels %}
	{% assign last_post_year = thisyear %}
	{% assign thisyear = post.date | date: "%Y" %}
	{% assign counter = counter | plus: 1 %}
	{% assign loopindex = counter | modulo: 2 %}

	{% if firstyear == true or thisyear != last_post_year %}

		{% if loopindex == 0 %}
			<div class="six columns">&nbsp;</div></div>
			{% assign counter = counter | plus: 1 %}
			{% assign loopindex = counter | modulo: 2 %}
		{% endif %}

		<div class="value-props row" style="margin-top: 20px;">
			<h4>{{ thisyear }}</h4>
			{% if thisyear == '2005' %}
				NAS Pensacola, Cherry Point, and on to Yuma. 
			{% elsif thisyear == '2006' %}
				Went to Iraq in February through September, working hazmat at Al Asad. I got back and went on a huge Amtrak trip.
			{% elsif thisyear == '2007' %}
				In the spring, I finished up my Certificate of Aviation Maintenance Technology, with the hopes that I'd be able to get an Airframes & Powerplant certification. I made it to Oshkosh with Jason's family and then deployed in the winter on the USS Tarawa.
			{% elsif thisyear == '2008' %}
				I spent the first six months on the USS Tarawa. When I got home, I rented a room from LeeAnne to stay out of the barracks, went to Oshkosh, and worked on my degree. I worked night crew.
			{% elsif thisyear == '2009' %}
				Ended up having ankle surgery in California, then graduated from Old Dominion University with a Bachelor's in Engineering Technology, with a minor in Engineering Management. In July, I got out of the Marine Corps, left the cats with LeeAnne, and went off to Europe for three months. I met Tori in Coventry and realized how mentally ill she was. I went on through Paris to Switzerland, then from there to Istanbul by train, then up to Sweden by train. I hiked eight days on the Kungsleden.
			{% elsif thisyear == '2010' %}
				I started classes at Portland State. What a fucking nightmare of a place.
			{% elsif thisyear == '2011' %}
				Doing stuff with Portland State Aerospace Society, getting the innovation grant and getting a proper Eagle license. Making the GPS board v1. Working with the Autonomous Vehicles Team and building the quadcopter. Met Bart Massey.
			{% elsif thisyear == '2012' %}
				Started working in Bart's lab and then was a TA for him. I changed my name to Jenner Ellis Hanni, got the last surgeries I'll get, and switched the gender marker on my driver's license and birth certificate. Went to see Eric in winter and it was really not a good visit. 
			{% elsif thisyear == '2013' %}
				Got hired at Max-Viz, bought my huse in Newberg, and graduated grad school with a Master's in Electrical and Computer Engineering from Portland State. 
			{% elsif thisyear == '2014' %}
				Working at Max-Viz. Not sure where this year went. Went to a meditation retreat the end of the year. 
			{% elsif thisyear == '2015' %}
				I did the ADF Dedicant Program and that helped give me confidence to do my own thing. Kept on doing the insight meditation and blew up some fundamental issues with my world. Relieved a lot of suffering, at least. Started blacksmithing and doing the archery. Figured out a lot of things related to meds, effects, scheduling, and what things really feel like. 
			{% elsif thisyear == '2016' %}
				This is the year I want to weave together everything into one narrative, instead of several, and make peace with how I feel about life so far. I'm going to try and get my consulting business off the ground, and to find the magic in the world again. And get better at syncing up with the stream. There's a lot I regret about how I felt, was treated, experienced the world, and the relationships with people. I want to have better experiences this year. This is the year I get back to 150 lbs and get fit with my 1BWxbench, 2BWxsquat, 3xBW dead, and sub-25 minute 3-mile.
			{% endif %}
			{% assign firstyear = false %}
		</div>
	{% endif %}

	{% if loopindex == 1 %}
	<div class="value-props row" style="margin-top: 20px;">
		<div class="six columns blogthumb"><a href="{{post.url}}"><img src="{{ post.image }}">{{ post.title }}</a></div>
	{% else %}
		<div class="six columns blogthumb"><a href="{{post.url}}"><img src="{{ post.image }}">{{ post.title }}</a></div>
	</div>
	{% endif %}
		
{% endfor %}

</div>

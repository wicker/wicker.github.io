---
layout: page
title:  
permalink: /blog/
---

<div class="container"> 
{% assign thisyear = 'now' | date: "%Y" %}
{% assign firstyear = true %}
{% assign counter = 0 %}

{% for post in site.categories.blog reversed %}
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
			<h4><a id="{{thisyear}}" style="color: #000;">{{ thisyear }}</a></h4>
			{% if thisyear == '2005' %}
				I enlisted in the Marine Corps in 2004 as an avionics technician and arrived in Yuma, Arizona, in the summer of 2005. My squadron supported the AV-8B Harrier jump jets. I'd been in Civil Air Patrol and learned to fly as a teenager, and upon arriving I called up the local EAA chapter and started going to meetings with these guys that flew and built their own airplanes. 
				{% elsif thisyear == '2006' %}
				I deployed to Iraq in February through September, working in avionics and hazmat at Al Asad. I got back, bought a truck with cash, and took a thirty-day leave by traveling in a big loop by Amtrak and Via through the US and Canada.				  {% elsif thisyear == '2007' %}
				I was exploring Arizona, hanging out with the EAA guys and the local El Centro Ninety-Nines, flying and occasionally helping turn a wrench, and in the spring I finished up my Certificate of Aviation Maintenance Technology from Embry Riddle with the hopes that I'd be able to get an Airframes & Powerplant certification. I went to the big Oshkosh airshow with a friend and then deployed in the winter on the USS Tarawa for seven months.
			{% elsif thisyear == '2008' %}
			  The first six months were spent at sea aboard the USS Tarawa as an avionics technician and quality inspector. When I got home, I rented a room off-base and buckled down on an engineering technology degree. 
			{% elsif thisyear == '2009' %}
				I worked night crew and finished up my degree before I got out of the Marines, graduating in May from Old Dominion University with a Bachelor's in Engineering Technology and a minor in Engineering Management. When I got out, I took off to backpack around Europe for three months. I made my way from London to Switzerland, then on by train to Istanbul and back via Samos and Athens. I took the train up to Sweden and Norway, hiked from Abisko to Nikkaluokta on the Kungsleden, and headed home once I ran out of backpacking money. 
			{% elsif thisyear == '2010' %}
				Back home, I found an apartment in Goose Hollow and started post-bac, pre-grad engineering classes at Portland State. I started out doing the systems administrator course with the Computer Action Team and learned a ton about how Linux and systems actually work. <br /><br />
				I tried to keep up with the airplane flying and building, but there was really no way with the financial and time stress of grad school. I took four weeks between the summer and fall terms to road trip all over the western states, and to visit Yuma to see my friends. 
			{% elsif thisyear == '2011' %}
				This is the year I found the Portland State Aerospace Society. They pushed me to take on projects I felt were out of my reach, and mostly I did OK. I got an innovation grant and started learning proper printed circuit board design of mixed analog/digital designs. I met a particular professor and started working in his Open Technology lab.
			{% elsif thisyear == '2012' %}
				I worked as a Teaching Assistant and interned at Boeing Insitu, which makes drones in Hood River. I did some work with the Autonomus Vehicles Team at Portland State and kept building stuff. I spent Christmas in Switzerland with family and was able to see my grandpa one last time before he passed. 
<br /><br />In the gap between the summer and fall terms, I hiked on the Pacific Crest Trail between Willamette Pass and McKenzie Pass through the Three Sisters Wilderness. I met a lady there who was 78 and had hiked the PCT from Mexico; she was way better at hiking than me.
			{% elsif thisyear == '2013' %}
				I got my first proper design engineer job while finishing up grad school by getting hired at Astronics Max-Viz, a company making Enhanced Vision Systems for small commercial aircraft to see at night, and through smoke and fog. I bought a house in a small town outside of Portland and graduated in summer from Portland State with a Master's in Electrical and Computer Engineering. 
			{% elsif thisyear == '2014' %}
				I spent the year starting to take independent consulting jobs for small hardware prototype designs. I got wrapped up in work and did less hiking than I would have liked; in the winer, I attended an insight meditation retreat that was really cool, and kickstarted my interest in how my mind actually works.  
			{% elsif thisyear == '2015' %}
				I never really slowed down after grad school and hadn't figured out how to manage the work/life balance, so I hit a rough patch of burnout in the spring. I finished up the project through first article and then moved on from my aircraft camera job about halfway through the year, joining the support team full time as a remote worker at OSH Park. 
				<br /><br />I had excellent timing without knowing it. In July I was invited as a last-minute addition to a fourteen-day Grand Canyon paddle-rafting trip. I met a lot of great people and came back energized. I spent the rest of the year working, hiking, kayaking, and building personal projects. 
			{% elsif thisyear == '2016' %}
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

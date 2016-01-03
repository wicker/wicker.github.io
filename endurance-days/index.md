---
layout: yed
title: City of Yuma Endurance Days
permalink: /endurance-days/
yed: true
---

<div class="container">

<div class="value-props row">
<div class="twelve columns">In 1949, Bob Woodward and Woody Jongeward flew an Aeronca Sedan called the City of Yuma non-stop for 47 days in a successful attempt to showcase the great flying weather and convince aviation to stick around in Yuma, Arizona, after the war.
<br /><br />
This page was created in collaboration with EAA Chapter 590 in Yuma, Arizona, some of whom helped to locate the plane in Minnesota in 1997 and bring it home to Yuma to be restored; both Bob and Woody were were present as the plane was flown briefly for a fiftieth anniversary re-enactment flight in 1999.
</div></div>
</div>

<div class="container" style="margin-top: 20px;"> 

{% assign counter = 0 %}
{% for post in site.categories.endurance-days %}
{% assign counter = counter | plus: 1 %}
{% assign loopindex = counter | modulo: 2 %}
{% if loopindex == 1 %}
<div class="value-props row" style="margin-top: 20px;">
<div class="six columns blogthumb"><a href="{{post.url}}"><img src="{{ post.image }}">{{ post.title }}</a></div>
{% else %}
<div class="six columns blogthumb"><a href="{{post.url}}"><img src="{{ post.image }}">{{ post.title }}</a></div>
</div>
{% endif %}
	
{% endfor %}

</div>

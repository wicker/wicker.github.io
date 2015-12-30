---
layout: page
title:  
permalink: /travels/
---

<div class="container"> 

<div class="value-props row"><a id="2016" style="color: #000"><h4>2016</h4></a>Lots of Lorem Ipsum?</div>
{% for post in site.posts %}
{% assign loopindex = forloop.index | modulo: 2 %}
{% if thisyear != prevyear %}
{% if loopindex == 0 %}<div class="six columns">&nbsp;</div></div>{% endif %}
<div class="value-props row" style="margin-top: 20px;"><a id="{{ prevyear }}" style="color: #000;"><h4>{{ prevyear }}</h4></a>

{% if prevyear == "2014" %} Here's some more text. 
{% elsif prevyear == "2013" %} Here's some more text. 
{% elsif prevyear == "2012" %} Here's some more text. 
{% elsif prevyear == "2011" %} Here's some more text. 
{% elsif prevyear == "2010" %} Here's some more text. 
{% elsif prevyear == "2009" %} Here's some more text. 
{% elsif prevyear == "2008" %} Here's some more text. 
{% elsif prevyear == "2007" %} Here's some more text. 
{% elsif prevyear == "2006" %} Here's some more text. 
{% else %} It must be 2015. {% endif %}

</div>
{% endif %}

{% if loopindex == 1 %}
<div class="value-props row" style="margin-top: 10px;">
<div class="six columns blogthumb"><a href="{{post.url}}"><img src="{{post.image}}">{{ post.title }}</a></div>
{% else %}
{% if thisyear == prevyear %}
<div class="six columns blogthumb"><a href="{{post.url}}"><img src="{{post.image}}">{{ post.title }}</a></div>
</div>
	{% endif %}
{% endif %}

{% assign thisyear = post.date | date: "%Y" %}
{% assign prevyear = post.previous.date | date: "%Y" %}
{% endfor %}

<div class="value-props row" style="margin-top: 10px;">
<div class="six columns blogthumb"><a href="/2005/06/copperstate-2005/"><img src="/img/thumbs/copperstate.png">Copperstate Fly-In</a></div>
<div class="six columns">&nbsp;</div>
</div>





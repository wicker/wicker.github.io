---
layout: landscape
title: Landscape Lab
permalink: /landscape/
landscape: true
---

<div class="container">

<div class="value-props row">
<div class="twelve columns">Landscape studies, cultural geography, physical geography, and geology -- with a side dash of wilderness, wildness, and wild ethics.</div></div>
</div>

<div class="container" style="margin-top: 20px;"> 

{% assign counter = 0 %}
{% for post in site.categories.landscape %}
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

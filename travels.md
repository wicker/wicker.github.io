---
layout: page
title: Travels
permalink: /travels/
---

<div class="container">
  <div class="row">
    <div class="twelve columns main-content">
    I like to see things, do stuff, talk to people, and take pictures. I used to be a private pilot and I spent about four years in the Americna southwest desert, but now I'm back where I grew up near Portland, Oregon. I've backpacked in Europe and North America, and I'm a veteran Marine who deployed to Iraq and on a West Pacific cruise on the <em>USS Tarawa</em>. 
    <br /><br />
    After finishing grad school and putting in some engineering cubicle time, I now work for myself so I can get out and about again. 
    <br />

<div style="display:inline-block">
{% assign thisyear = 'now' | date: "%Y" %}
{% assign firstyear = true %}

{% for post in site.travels reversed %}
  {% assign last_post_year = thisyear %}
  {% assign thisyear = post.date | date: "%Y" %}

  {% if firstyear == true or thisyear != last_post_year %}

  {% if thisyear != '2001' %}
  <div class="clear">&nbsp;</div>
  {% endif %}

  <h4>{{ thisyear }}</h4>
  {% assign firstyear = false %}
  <div class="clear">&nbsp;</div>
{% endif %}

  <div class="blogthumb">
    <a href="{{post.url}}"><img src="{{ post.image }}"></a>
    <div class="blogthumb-link"><a href="{{post.url}}">{{ post.title }}</a></div>
  </div>
    
{% endfor %}

<div class="clear">&nbsp;</div>
    </div>
  </div>

</div>

---
layout: page
title: Travels
permalink: /travels/
---

## Travels

<p class="centered">I like to see things, do stuff,<br />talk to people, and take pictures.</p> 

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

  <div class="travelthumb">
    <a href="{{post.url}}"><img src="{{ post.image }}"></a>
    <div class="travelthumb-link"><a href="{{post.url}}">{{ post.title }}</a></div>
  </div>
    
{% endfor %}

<div class="clear">&nbsp;</div>

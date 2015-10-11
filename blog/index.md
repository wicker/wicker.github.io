---
layout: page
title: Blog
permalink: /blog/
---

<div class="container"> 
  {% for post in site.posts limit: 10 %}
  <div class="value-props row" style="margin-top: 10px;">
    <div class="five columns value-prop"><a href="{{post.url}}"><img src="{{post.image}}" style="width:100%;"></a></div>
    <div class="seven columns value-prop"><strong><a href="{{ post.url }}">{{ post.title }}</a></strong><br />{{ post.content | strip_html | truncatewords: 15 }} </div>
  </div>
  {% endfor %}
</div>


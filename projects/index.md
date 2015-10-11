---
layout: page
title: Projects
permalink: /projects/
---

<div class="container">
  {% for post in site.categories.projects %}
  <div style="float:left; margin: 0 1%; width: 45%;">
    <a href="{{post.url}}"><img src="{{post.image}}" style="width: 100%; padding: 0px; margin: 0px;"></a>
    <div style="height: 2.8em; overflow:hidden; text-align:center; margin-bottom: 10px;">
       <strong><a href="{{ post.url }}">{{ post.title }}</a></strong>
    </div>

  </div>


  {% endfor %}
</div>


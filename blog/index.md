---
layout: page
title: Blog
permalink: /blog/
---

{% for post in site.categories.blog %}
  <a href="{{ post.url }}">{{ post.title }}</a><br />
	{{ post.description }}
{% endfor %}

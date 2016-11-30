---
layout: page
title: Travels
permalink: /travels/
---

{% for article in site.travels %}
  <a href="{{ article.url }}">{{ article.title }}</a>
{% endfor %}

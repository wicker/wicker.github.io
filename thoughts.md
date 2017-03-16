---
layout: page
title: Thoughts
permalink: /thoughts/
---

{% for article in site.thoughts %}
  <a href="{{ article.url }}">{{ article.title }}</a>
{% endfor %}

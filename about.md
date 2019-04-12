---
layout: default
image_header: /img/about.jpg
summary: Foo 
title: About Jenner 
permalink: /about/
---

<h1 class="centered">{{ page.title }}</h1>

<div class="about__button-container">
   <a class="portfolio__button" target="_blank"
      href="https://www.linkedin.com/in/jenner-hanni">LinkedIn</a>
   <a class="portfolio__button" target="_blank" 
      href="https://www.github.com/wicker/">GitHub</a>
   <a class="portfolio__button" target="_blank"
      href="mailto:jennerhanni@gmail.com">Email</a>
</div>

{% for card in site.data.about %}
  {% capture cyc %}{% cycle 'odd', 'even' %}{% endcapture %}
  {% if cyc == 'even' %}
<figure class="about__figure">
  <img src="{{ card.img }}">
  <figcaption>
    <p>{{ card.desc }}</p>
  </figcaption>
</figure>
  {% else %}
<figure class="about__figure flex-reverse-wrap">
  <figcaption>
    <p>{{ card.desc }}</p>
  </figcaption>
  <img src="{{ card.img }}">
</figure>
  {% endif %}
{% endfor %}

<p>&nbsp;</p>

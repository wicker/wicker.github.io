---
layout: default
title: Front End Web Developer
image_header: /img/portfolio.png
summary: Remote front end developer with full stack experience specializing in React, NodeJS, Flask, and WordPress. Formerly a private pilot, avionics technician, and open source hardware developer. <br /><br />&bull; B.S. in Engineering Technology, 2009<br />&bull; M.Eng. in Electrical and Computer Engineering, 2013<br />&bull; ReactJS and Full Stack Nanodegrees from Udacity, 2018<br /><br />
showhidejs: true
permalink: /portfolio/
---

<h1 class="centered">Portfolio</h1>

<div class="portfolio__button-container">
  <button class="portfolio__button" onclick="show('all')">Show All</button> 
  <button class="portfolio__button" onclick="show('website')">Websites</button> 
  <button class="portfolio__button" onclick="show('hardware')">Hardware</button> 
  <button class="portfolio__button" onclick="show('software')">Software</button> 
  <button class="portfolio__button" onclick="show('talk')">Talks</button> 
</div>

<div class="portfolio__grid-container">

{% for proj in site.data.projects %}
  <div class="portfolio__box portfolio__box-vert portfolio__box-{{ proj.section }}">
    <span class="portfolio__box-year">{{ proj.year }}</span>
    {% if proj.thumb == '' %}<img src="/img/thumbs/e202var.png">
    {%- else -%}<img src="{{ proj.thumb }}">
    {% endif -%}
    <h2>{{ proj.title }}</h2>
    <p>{{ proj.desc }}</p>
    {% if proj.tags -%}
      <p class="tags">{{ proj.tags | join: ", " }}</p>
    {%- endif -%}
    {% if proj.urls %}
    <div class="portfolio__box-links">
      {% for url in proj.urls -%}
        <a class="portfolio__button-link" href="{{ url.address }}">{{ url.linktext }}</a>
      {%- endfor %}
    </div>
    {%- endif %}
  </div>
  {% endfor %}

</div>

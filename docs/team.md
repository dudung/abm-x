---
layout: default
title: Team
---
# Team

<ul>
  {% for author in site.authors %}
    <li>
      <h2><a href="{{site.baseurl}}{{ author.url }}">{{ author.name }}</a></h2>
      <h3>{{ author.position }}</h3>
      <p>{{ author.content | markdownify }}</p>
    </li>
  {% endfor %}
</ul>
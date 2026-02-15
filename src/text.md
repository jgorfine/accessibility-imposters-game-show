---
name: "Round #1"
eleventyComputed:
  title: "{{ name }} / {{ site.name }}"
  h1: "{{ name }}: Text Color"
tags: game  
layout: "game.njk"
page_css: "css/text-color.css"
---

{% sample "1", "Text Block" %}
  {% textblock %}
{% endsample %}

{% sample "2", "Text Block" %}
  {% textblock %}
{% endsample %}

{% sample "3", "Text Block" %}
  {% textblock %}
{% endsample %}

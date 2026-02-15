---
name: "Round #4"
eleventyComputed:
  title: "{{ name }} / {{ site.name }}"
  h1: "{{ name }}: Toggle Buttons"
tags: game
layout: "game.njk"
---

{% sample "1", "Toggle Button" %}
  {% filters "Wednesday February 25", true %}
{% endsample %}

{% sample "2", "Toggle Button" %}
  {% filters "Wednesday, February 25" %}
{% endsample %}

{% sample "3", "Toggle Button" %}
  {% filters "Tuesday February 24" %}
{% endsample %}
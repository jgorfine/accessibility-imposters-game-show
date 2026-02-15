---
name: "Round #2"
eleventyComputed:
  title: "{{ name }} / {{ site.name }}"
  h1: "{{ name }}: Links"
tags: game
layout: "game.njk"
---

{% sample "1", "Link" %}
  <a class="game-link style--1" href="https://www.deque.com/axe-con/presenters" rel="nofollow">Presenters</a>
{% endsample %}

{% sample "2", "Link" %}
  <a class="game-link style--2" href="https://www.deque.com/axe-con/" rel="nofollow">Home</a>
{% endsample %}

{% sample "3", "Link" %}
  <div class="game-link style--1" role="link">2026 Agenda</div>
{% endsample %}

{% sample "4", "Link" %}
  <a class="game-link style--1" href="https://www.deque.com/axe-con/about" rel="nofollow">About</a>
{% endsample %}

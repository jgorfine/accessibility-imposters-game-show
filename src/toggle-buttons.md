---
name: "Round #4"
eleventyComputed:
  title: "{{ name }} / {{ site.name }}"
  h1: "{{ name }}: Toggle Buttons"
tags: game
layout: "game.njk"
---

<section id="sample-1" aria-labelledby="sample-1__heading" role="region">
  <figure>
    <figcaption>
      <h2 id="sample-1__heading">Toggle Button #1</h2>
    </figcaption>
    <div class="figtray background--5" tabindex="0">
      <div class="game-filters">
        <div class="game-filters__header">
          <div class="game-filters__date">Wednesday February 25</div>
          <button class="game-filters__button" type="button">Filter Tracks</button>
        </div>
        <div class="game-filters__body" role="group" hidden>
          <div class="game-filters__field">
            <label for="sample-1__tracks">Tracks</label>
            <div>
              <select id="sample-1__tracks" readonly>
                <option>-- Select an option --</option>
              </select>
            </div>
          </div>
          <div class="game-filters__field">
            <label for="sample-1__playlists">Playlists</label>
            <div>
              <select id="sample-1__playlists" readonly>
                <option>-- Select an option --</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </figure>
</section>
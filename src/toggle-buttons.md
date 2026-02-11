---
name: "Round #4"
eleventyComputed:
  title: "{{ name }} / {{ site.name }}"
  h1: "{{ name }}: Toggle Buttons"
tags: game
layout: "game.njk"
---

<!-- THIS IS THE IMPOSTOR -->
<section id="sample-1" aria-labelledby="sample-1__heading" role="region">
  <figure>
    <figcaption>
      <h2 id="sample-1__heading">Toggle Button #1</h2>
    </figcaption>
    <div class="figtray background--5" tabindex="0">
      <div 
        data-controller="filters" 
        data-filters-expanded-value="false"
        class="game-filters" 
      >
        <div class="game-filters__header">
          <div class="game-filters__date">Tuesday February 24</div>
          <button 
            data-filters-target="toggle"
            data-action="filters#toggle"
            class="game-filters__button"
            type="button"
          >
            Filter Tracks
          </button>
        </div>
        <div 
          data-filters-target="filters" 
          class="game-filters__body" 
          role="group" 
          hidden
        >
          <div class="game-filters__field">
            <label for="sample-1__tracks">Tracks</label>
            <div>
              <select data-filters-target="tracks" id="sample-1__tracks" readonly>
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
<!-- THIS IS THE IMPOSTOR -->

<section id="sample-2" aria-labelledby="sample-2__heading" role="region">
  <figure>
    <figcaption>
      <h2 id="sample-2__heading">Toggle Button #2</h2>
    </figcaption>
    <div class="figtray background--4" tabindex="0">
      <div 
        data-controller="filters" 
        data-filters-expanded-value="false"
        class="game-filters" 
      >
        <div class="game-filters__header">
          <div class="game-filters__date">Wednesday February 25</div>
          <button 
            data-filters-target="toggle"
            data-action="filters#toggle"
            class="game-filters__button"
            aria-expanded="false"
            type="button"
          >
            Filter Tracks
          </button>
        </div>
        <div 
          data-filters-target="filters" 
          class="game-filters__body" 
          role="group"
          hidden
        >
          <div class="game-filters__field">
            <label for="sample-1__tracks">Tracks</label>
            <div>
              <select data-filters-target="tracks" id="sample-1__tracks" readonly>
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

<section id="sample-3" aria-labelledby="sample-3__heading" role="region">
  <figure>
    <figcaption>
      <h2 id="sample-3__heading">Toggle Button #3</h2>
    </figcaption>
    <div class="figtray background--7" tabindex="0">
      <div 
        data-controller="filters" 
        data-filters-expanded-value="true"
        class="game-filters" 
      >
        <div class="game-filters__header">
          <div class="game-filters__date">Tuesday February 24</div>
          <button 
            data-filters-target="toggle"
            data-action="filters#toggle"
            class="game-filters__button"
            aria-expanded="true"
            type="button"
          >
            Filter Tracks
          </button>
        </div>
        <div 
          data-filters-target="filters" 
          class="game-filters__body" 
          role="group" 
        >
          <div class="game-filters__field">
            <label for="sample-1__tracks">Tracks</label>
            <div>
              <select data-filters-target="tracks" id="sample-1__tracks" readonly>
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
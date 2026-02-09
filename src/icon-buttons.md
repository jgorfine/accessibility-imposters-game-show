---
name: "Round #3"
eleventyComputed:
  title: "{{ name }} / {{ site.name }}"
  h1: "{{ name }}: Icon Buttons"
tags: 'game'
libraries: 'floatingui'
layout: "game.njk"
---

<section id="sample-1" aria-labelledby="sample-1__heading" role="region">
  <figure>
    <figcaption>
      <h2 id="sample-1__heading">Icon Button #1</h2>
    </figcaption>
    <div class="figtray background--8" tabindex="0">
      <!-- Save -->
      <button aria-label="Save" type="button">
        <svg aria-hidden="true" focusable="false" viewBox="0 -960 960 960">
          <path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM565-275q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/>
        </svg>
      </button>
    </div>
  </figure>
</section>

<section id="sample-2" aria-labelledby="sample-2__heading" role="region">
  <figure>
    <figcaption>
      <h2 id="sample-2__heading">Icon Button #2</h2>
    </figcaption>
    <div class="figtray background--6" tabindex="0" data-controller="tooltip">
      <!-- Redo --> 
      <button 
        aria-labelledby="redo-tooltip" 
        type="button" 
        data-tooltip-target="button" 
        data-action="mouseenter->tooltip#show mouseleave->tooltip#hide focus->tooltip#show blur->tooltip#hide"
      >
        <svg viewBox="0 -960 960 960">
          <path d="M396-200q-97 0-166.5-63T160-420q0-94 69.5-157T396-640h252L544-744l56-56 200 200-200 200-56-56 104-104H396q-63 0-109.5 40T240-420q0 60 46.5 100T396-280h284v80H396Z"/>
        </svg>
        <span class="sr-only">Redo</span>
      </button>
      <div id="redo-tooltip" role="tooltip" data-tooltip-target="tooltip">
        <span>Redo</span>
        <span class="arrow" data-tooltip-target="arrow"></span>
      </div>
    </div>
  </figure>
</section>

<section id="sample-3" aria-labelledby="sample-3__heading" role="region">
  <figure>
    <figcaption>
      <h2 id="sample-3__heading">Icon Button #3</h2>
    </figcaption>
    <div class="figtray background--3" tabindex="0" data-controller="tooltip">
      <!-- Save -->
      <button 
        type="button" 
        data-tooltip-target="button" 
        data-action="mouseenter->tooltip#show mouseleave->tooltip#hide focus->tooltip#show blur->tooltip#hide"
      >
        <svg aria-hidden="true" focusable="false" viewBox="0 -960 960 960">
          <path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM565-275q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/>
        </svg>
      </button>
      <div role="tooltip" data-tooltip-target="tooltip">
        <span>Save</span>
        <span class="arrow" data-tooltip-target="arrow"></span>
      </div>
    </div>
  </figure>
</section>

<section id="sample-4" aria-labelledby="sample-4__heading" role="region">
  <figure>
    <figcaption>
      <h2 id="sample-4__heading">Icon Button #4</h2>
    </figcaption>
    <div class="figtray background--5" tabindex="0">
      <!-- Undo -->
      <button type="button">
        <svg viewBox="0 -960 960 960">
          <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/>
        </svg>
        <span class="sr-only">Undo</span>
      </button>
    </div>
  </figure>
</section>

<section id="sample-5" aria-labelledby="sample-5__heading" role="region">
  <figure>
    <figcaption>
      <h2 id="sample-5__heading">Icon Button #5</h2>
    </figcaption>
    <div class="figtray background--7" tabindex="0" data-controller="tooltip">
      <!-- Undo -->
      <button 
        type="button"
        data-tooltip-target="button" 
        data-action="mouseenter->tooltip#show mouseleave->tooltip#hide focus->tooltip#show blur->tooltip#hide"
      >
        <svg viewBox="0 -960 960 960">
          <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/>
        </svg>
      </button>
      <div role="tooltip" data-tooltip-target="tooltip">
        <span>Undo</span>
        <span class="arrow" data-tooltip-target="arrow"></span>
      </div>
    </div>
  </figure>
</section>

<section id="sample-6" aria-labelledby="sample-6__heading" role="region">
  <figure>
    <figcaption>
      <h2 id="sample-6__heading">Icon Button #6</h2>
    </figcaption>
    <div class="figtray background--4" tabindex="0">
      <!-- Redo --> 
      <button aria-label="Redo" type="button">
        <svg viewBox="0 -960 960 960">
          <path d="M396-200q-97 0-166.5-63T160-420q0-94 69.5-157T396-640h252L544-744l56-56 200 200-200 200-56-56 104-104H396q-63 0-109.5 40T240-420q0 60 46.5 100T396-280h284v80H396Z"/>
        </svg>
      </button>
    </div>
  </figure>
</section>

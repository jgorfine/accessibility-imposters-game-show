---
name: "Round #3"
eleventyComputed:
  title: "{{ name }} / {{ site.name }}"
  h1: "{{ name }}: Icon Buttons"
tags: 'game'
libraries: 'floatingui'
layout: "game.njk"
---

<section id="sample-1" aria-labelledby="" role="region">
  <figure>
    <figcaption>Icon Button #1</figcaption>
    <div class="figtray" tabindex="0">
      <!-- Save -->
      <button aria-label="Save" type="button">
        <svg aria-hidden="true" focusable="false" viewBox="0 -960 960 960">
          <path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM565-275q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/>
        </svg>
      </button>
    </div>
  </figure>
</section>

<section id="sample-2" aria-labelledby="" role="region">
  <figure>
    <figcaption>Icon Button #2</figcaption>
    <div class="figtray" tabindex="0">
      <!-- Redo --> 
      <button type="button">
        <svg viewBox="0 -960 960 960">
          <path d="M396-200q-97 0-166.5-63T160-420q0-94 69.5-157T396-640h252L544-744l56-56 200 200-200 200-56-56 104-104H396q-63 0-109.5 40T240-420q0 60 46.5 100T396-280h284v80H396Z"/>
        </svg>
        <span class="sr-only">Redo</span>
      </button>
    </div>
  </figure>
</section>

<section id="sample-3" aria-labelledby="" role="region">
  <figure>
    <figcaption>Icon Button #3</figcaption>
    <div class="figtray" tabindex="0" data-controller="foo">
      <!-- Save -->
      <button type="button" data-foo-target="button" data-action="mouseenter->foo#show mouseleave->foo#hide focus->foo#show blur->foo#hide">
        <svg aria-hidden="true" focusable="false" viewBox="0 -960 960 960">
          <path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM565-275q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/>
        </svg>
      </button>
      <div role="tooltip" data-foo-target="tooltip">
        <span>Save</span>
        <span class="arrow" data-foo-target="arrow"></span>
      </div>
    </div>
  </figure>
</section>

<section id="sample-4" aria-labelledby="" role="region">
  <figure>
    <figcaption>Icon Button #4</figcaption>
    <div class="figtray" tabindex="0">
      <!-- Undo -->
      <button type="button">
        <svg viewBox="0 -960 960 960">
          <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/>
        </svg>
      </button>
    </div>
  </figure>
</section>

<section id="sample-5" aria-labelledby="" role="region">
  <figure>
    <figcaption>Icon Button #5</figcaption>
    <div class="figtray" tabindex="0">
      <!-- Save -->
      <button type="button">
        <svg viewBox="0 -960 960 960">
          <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/>
        </svg>
      </button>
    </div>
  </figure>
</section>

<section id="sample-6" aria-labelledby="" role="region">
  <figure>
    <figcaption>Icon Button #6</figcaption>
    <div class="figtray" tabindex="0">
      <!-- Redo --> 
      <button type="button">
        <svg viewBox="0 -960 960 960">
          <path d="M396-200q-97 0-166.5-63T160-420q0-94 69.5-157T396-640h252L544-744l56-56 200 200-200 200-56-56 104-104H396q-63 0-109.5 40T240-420q0 60 46.5 100T396-280h284v80H396Z"/>
        </svg>
      </button>
    </div>
  </figure>
</section>

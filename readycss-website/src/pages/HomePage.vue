<template>
<main class="page page-widescreen">

  <section class="banner">
    <Switcher limit="2" threshold="70rem" space="6rem">

      <div class="banner-item banner-hero">
        <h2 class="banner-hero--title">ReadyCSS</h2>
        <p class="banner-hero--description">A CSS property management library and style base to kick off your new web project</p>

        <div class="banner-hero--actions">
          <router-link class="btn btn-main" to="/">Get Started</router-link>
          <router-link class="btn" to="/">Examples</router-link>
          <a href="https://github.com/StefanH-AT/ReadyCss" class="btn">GitHub</a>
        </div>

        <div class="callout palette-notice">
          <strong class="callout-head"><i class="fas fa-warning"></i> Warning</strong>
          <div class="callout-body">ReadyCSS is currently in early development and not production-ready!</div>
        </div>
      </div>


      <div class="banner-item showcase">
        <h3>How it works</h3>
        <div class="showcase--card">
          <p>Assign themes and palettes to manage your site's colors</p>
          <code-sample :code="sampleBodyThemePalette" lang="html" preview></code-sample>
        </div>

        <div class="showcase--card">
          <p>Write your own components using ReadyCSS's pre-made CSS variables</p>
          <code-sample :code="sampleComponents" lang="css"></code-sample>
        </div>
      </div>

    </Switcher>

    <div class="banner-footer">
      <i class="fa-solid fa-chevron-down"></i>
    </div>
  </section>

  <section class="colorsystem">

    <div class="colorsystem--head">
      <h2>The 3-tier color management system</h2>

      <p class="colorsystem--head--caption"><strong>But why?</strong></p>
      <p>In ReadyCSS, instead of accessing colors directly, we use an assortment of abstract color names on components which can be altered by themes and palettes</p>

      <p class="colorsystem--head-caption"><strong>Layers in detail:</strong></p>
    </div>

    <div>

      <div class="colorsystem--layer palette-layer0">
        <h3>Theme</h3>
        <p>As the topmost layer, the theme determines the site's overarching palette of colors.</p>
        <p>The inbuilt <code>--theme-light</code> or <code>--theme-dark</code> are supported out of the box, but you can define your own themes too to add support for high contrast mode or other fun styles.</p>

        <p>Because themes are defined at a high level, the entire site can change its theme without requiring any special-case markup or CSS.</p>

        <div class="colorsystem--layer-actions">
          <strong>Try it!</strong>
          <button class="btn" @click="theme.toggleTheme()">Toggle theme</button>
        </div>
      </div>


      <div class="colorsystem--layer palette-layer1">
        <h3>Palette</h3>
        <p>Stuck in the middle, the palette layer's job is to transform colors for smaller areas on the site.</p>

        <strong>Example</strong>
        <div>
          <code-sample lang="html" :code="sampleLayerPalette" preview></code-sample>

          <div class="colorsystem--layer-actions">
            <strong>Switch palette</strong>
            <div class="btn-group">
              <button class="btn" @click="previousPalette"><i class="fas fa-chevron-left"></i></button>
              <button class="btn" @click="nextPalette"><i class="fas fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </div>

      <div class="colorsystem--layer palette-layer2">
        <h3>Scheme</h3>
        <p>The scheme layer represents the assortment of CSS custom properties that are directly used by your CSS.</p>

        <code-sample lang="scss" :code="sampleLayerScheme"></code-sample>

        <hr>

        <p>A full list of scheme properties can be found in the <router-link to="/docs">documentation</router-link></p>
      </div>

    </div>
  </section>

  <hr>

  <section class="components">
    <h2>Components</h2>
    <p>Many common components which appear in almost any project are accessible in the (optional) ReadyCSS component library</p>

    <div class="components-groups">
      <Switcher limit="2" threshold="30rem" space="2rem">

        <div class="components--group">
          <h3>Buttons</h3>
          <button class="btn">Button</button>
          <button class="btn btn-main">Main Button</button>
          <button class="btn btn-sm">Small Button</button>
          <div class="btn-group">
            <button class="btn">Grouped</button>
            <button class="btn">Buttons</button>
          </div>
        </div>

        <div class="components--group">
          <h3>Text inputs</h3>
          <input type="text" class="text-input" placeholder="Enter..." />
          <input type="text" class="text-input text-input-underline" placeholder="Enter..." />
          <div class="text-input-shift-wrapper">
            <input type="text" class="text-input" placeholder="" id="components-text-shift" />
            <label for="components-text-shift">Enter...</label>
          </div>
        </div>

        <div class="components--group">
          <h3>Checkboxes</h3>
          <div>
            <input type="checkbox" class="checkbox" id="components-checkbox-1" checked>
            <label for="components-checkbox-1">Checkbox</label>
          </div>
          <div>
            <input type="checkbox" class="checkbox input-check-cross" id="components-checkbox-2" checked>
            <label for="components-checkbox-2">Checkbox</label>
          </div>
        </div>

      </Switcher>
    </div>

  </section>

</main>
</template>

<script lang="ts" setup>
import Switcher from "@/components/layout/Switcher.vue";
import CodeSample from "@/components/CodeSample.vue";
import * as theme from "@/plugins/theme-plugin";
import {computed, ref} from "vue";
import SwitcherPage from "@/pages/gallery/SwitcherPage.vue";

const sampleBodyThemePalette =
`<div class=\"theme-dark palette-default\">
    <button class='btn btn-main'>Hello World!</button>
</div>`;

const sampleComponents =
`.badge {
  background-color: var(--scheme-main);
  border-radius: var(--radius);
}`;

const sampleLayerScheme =
`.badge {
  // --scheme-main represents a "main" color.
  // The default palette is set to a neutral blue.
  // Add your own palettes which can convey meanings like
  // danger, success or warnings
  background-color: var(--scheme-main);

  /* ... */
}`;

const sampleLayerPalette = computed(() =>
`<!-- Change palette here; All colors change -->
<div class="${currentPalette.value}">

  <button class="btn btn-main">Button</button>
  <input type="checkbox" class="checkbox" id="samplePalette" checked>
  <label for="samplePalette">Checkbox</label>
  <input type="text" class="text-input" placeholder="Focus me!">

</div>`
);

function nextPalette() {
  currentPaletteIndex.value++;
  if (currentPaletteIndex.value >= palettes.length) {
    currentPaletteIndex.value = 0;
  }
}

function previousPalette() {
  currentPaletteIndex.value--;
  if (currentPaletteIndex.value < 0) {
    currentPaletteIndex.value = palettes.length - 1;
  }
}

const currentPaletteIndex = ref(0);
const currentPalette = computed(() => palettes[currentPaletteIndex.value]);
const palettes = [ "palette-default", "palette-notice", "palette-layer0", "palette-layer1", "palette-layer2" ];

const paletteExamplePalette = ref("");

</script>

<style lang="scss" scoped>

section {

  margin-top: 2rem;
  margin-bottom: 7rem;

  h2 {
    color: var(--scheme-main);
    text-align: center;
  }
}

section:not(:first-child) {
  max-width: var(--page-width-reader);
  margin-inline: auto;
}

.banner {
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
}

.banner-item {
  display: grid;
  grid-template-columns: 100%;
  align-content: center;
  min-height: 80vh;
  min-height: 80dvh;

  max-width: var(--page-width-reader);
  margin-inline: auto;
}

.banner-hero--title {
  display: inline-block;
  font-size: clamp(2rem, 10vw, 4rem);
  background: linear-gradient(120deg, hsl(190, 70%, 50%), hsl(250, 80%, 55%));
  background-clip: text;
  color: transparent;
}
.banner-hero--description {
  color: var(--scheme-shade-3);
  font-size: clamp(1rem, 5vw, 1.25rem);
}
.banner-hero--actions {
  display: flex;
  flex-wrap: wrap;
  margin-block: 1rem;
  gap: 1rem;
  align-items: start;
}
.banner-footer {
  text-align: center;
  font-size: 1.4em;
  color: var(--scheme-text-muted-color);
}

.showcase h3 {
  font-size: 1.25rem;
  color: var(--scheme-main);
}
.showcase--card {
  margin-bottom: 2rem;
}

.showcase--card-actions {
  margin-top: 0.5rem;
}

.colorsystem {
  counter-reset: layer;
}

.colorsystem h2 {
  margin-bottom: 2rem;
}

.colorsystem--layer {

  margin-block: 6rem;
  padding: 2rem;
  border-radius: var(--radius);
  background: var(--scheme-main);
  position: relative;

  counter-increment: layer;

  box-shadow: 1rem 1rem 0 0 var(--scheme-surface-0);

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 1.5rem;
  }

  &::before {
    content: "" counter(layer);

    position: absolute;
    left: -3rem;
    top: 0;
    font-size: 1.4rem;
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
    border-radius: 100%;
    background-color: var(--scheme-main);
    text-shadow: 0.1rem 0.1rem 0rem var(--scheme-shadow);
    box-shadow: 0 0.1rem 0.15rem 0 var(--scheme-shadow);
  }
}

.colorsystem--layer-actions {
  margin-block: 0.5rem;
  strong {
    display: block;
  }
}

.components-groups {
  margin-block: 4rem;
}

.components--group {
  display: grid;
  gap: 0.75rem;
  justify-items: start;
  align-content: start;

  h3 {
    width: 100%;
    font-size: 1.2rem;
    padding-bottom: 0.75rem;
    border-bottom: var(--border-width) solid var(--scheme-surface-0);
  }
}

</style>


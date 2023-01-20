<template>
  <header>

    <div class="nav">
      <h1><router-link to="/">ReadyCSS</router-link></h1>
      <nav>
        <ul class="nav-list">
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><a href="https://github.com/StefanH-AT/ReadyCss"><i class="fab fa-github"></i> GitHub</a></li>
        </ul>
        <button @click="toggleTheme" class="switch-theme">{{ themeName }}</button>
      </nav>
    </div>

  </header>
  <div class="nav-pages">
    <div class="nav-pages-scroll">
      <router-link to="/colors">Colors</router-link>
      <router-link to="/button">Buttons</router-link>
      <router-link to="/textinputs">Text Inputs</router-link>
      <router-link to="/check">Checkboxes</router-link>
      <router-link to="/radio">Radio</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import * as themePlugin from "@/plugins/theme-plugin";

export default {
  methods: {
    toggleTheme() {
      themePlugin.toggleTheme();
    }
  },
  computed: {
    isDark: () => themePlugin.isDark(),
    themeName: () => themePlugin.getThemeName()
  }
}
</script>

<style scoped lang="scss">

header {
  background-color: var(--scheme-shade-7);
  box-shadow: 0 0.1rem 0.75rem 0 var(--scheme-shadow);
  padding-block: calc(var(--spacer) * 0.4);
}

.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-size: 1.6rem;

    > a {
      text-decoration: none;
    }
  }
}

nav {
  display: flex;
  align-items: center;
  gap: var(--spacer);
}

.nav-list {
  display: flex;
  gap: var(--spacer);
  list-style: none;
  padding-inline: 0;
}

.nav-pages {

  --nav-pages-spacer: calc(var(--spacer) * 0.5);
  width: fit-content;
  max-width: 100%;
  margin-inline: auto;

  padding: var(--nav-pages-spacer);


  .nav-pages-scroll {
    display: flex;
    justify-content: start;
    gap: var(--nav-pages-spacer);

    overflow-x: auto;
    touch-action: pan-y;
  }


  a {
    font-size: 0.85em;
    text-decoration: none;
    background-color: var(--scheme-shade-8);
    border: calc(var(--border-width) * 0.5) solid var(--scheme-shade-6);
    padding: var(--nav-pages-spacer) calc(var(--nav-pages-spacer) * 2);
    border-radius: 100rem;

    display: grid;
    place-items: center;
    text-align: center;
  
    white-space: nowrap;

    &:focus-visible {
      outline: none;
      background-color: var(--scheme-main);
    }
  }
}

.switch-theme {
  height: 100%;
  background: none;

  cursor: pointer;
  color: var(--scheme-foreground);

  border: var(--scheme-shade-6) solid var(--border-width);
  border-radius: 1000px;
  padding: 0.25rem 0.75rem;
}

</style>
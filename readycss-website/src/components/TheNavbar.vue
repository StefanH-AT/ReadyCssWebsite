<template>
  <header>

    <div class="nav">
      <h1><router-link to="/">ReadyCSS</router-link></h1>
      <nav>
        <ul class="nav-list">
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><a href="https://github.com/StefanH-AT/ReadyCss"><i class="fab fa-github"></i> GitHub</a></li>
        </ul>
        <button @click="themePlugin.toggleTheme()" class="switch-theme">{{ themePlugin.getThemeName() }}</button>
      </nav>
    </div>

  </header>
</template>

<script lang="ts" setup>
import * as themePlugin from "@/plugins/theme-plugin";

</script>

<style scoped lang="scss">

header {
  background-color: var(--scheme-surface-0);
  box-shadow: 0 0.1rem 0.75rem 0 var(--scheme-shadow);
  padding-block: calc(var(--spacer) * 0.75);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--page-width-reader);
  margin-inline: auto;

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
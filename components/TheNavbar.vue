<template>
  <header>

    <div class="nav">
      <h1><a href="/">ReadyCSS</a></h1>
      <nav>
        <ul class="nav-list">
          <li><a href="/getting-started">Get Started</a></li>
        </ul>
        <button @click="themePlugin.toggleTheme()" class="switch-theme">{{ themePlugin.getThemeName() }}</button>
      </nav>
    </div>

  </header>
</template>

<script lang="ts" setup>
import * as themePlugin from "../readycss-website/docs/.vitepress/theme/plugins/theme-plugin";

</script>

<style scoped lang="scss">

header {
  background-color: var(--scheme-surface-0);
  box-shadow: 0 0.1rem 0.75rem 0 var(--scheme-shadow);
  padding-block: calc(var(--space-xs) * 0.75);

  position: sticky;
  top: 0;
  z-index: 999;
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
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: var(--space-xs);
}

.nav-list {
  display: flex;
  gap: var(--space-xs);
  overflow-x: hidden;
  list-style: none;
  padding-inline: 0;

  a {
    text-decoration: none;
  }
}

.nav-list--reveal {
  flex-wrap: wrap;
}

.switch-theme {
  height: 100%;
  background: none;

  cursor: pointer;
  color: var(--scheme-foreground);

  border: var(--scheme-shade-6) solid var(--stroke);
  border-radius: 1000px;
  padding: 0.25rem 0.75rem;
}

</style>
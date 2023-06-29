<template>

  <div class="layout-docs">
    <the-navbar></the-navbar>
    <main>

      <aside>
        <span>Documentation</span>
        <ul>
          <li><a href="/docs">Getting Started</a></li>
        </ul>
      </aside>

      <article class="docs">
        <slot/>
      </article>

      <aside>
        <span>Contents</span>
        <ul>
          <li>Chapter 1</li>
          <li>Chapter 2</li>
          <li>Chapter 3</li>
        </ul>
      </aside>

    </main>
    <the-footer></the-footer>
  </div>

</template>

<script setup lang="ts">
import TheFooter from "../TheFooter.vue";
import TheNavbar from "../TheNavbar.vue";
</script>

<style scoped>
.layout-docs {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
}

main {
  --_gutter: var(--space-m);
  display: grid;
  grid-template-columns: 1fr var(--page-width-reader) 1fr;
  gap: var(--_gutter);
}

main > * {
  margin-block: var(--_gutter);
}

main > *:first-child {
  margin-inline-start: var(--_gutter);
}
main > *:last-child {
  margin-inline-start: var(--_gutter);
}

article {
}
</style>

<template>
<footer>
  <a href="https://github.com/StefanH-AT/ReadyCSS">GitHub</a>
  <a href="https://github.com/StefanH-AT/ReadyCSSWebsite">GitHub Website</a>
</footer>
</template>

<script lang="ts">
export default {
}
</script>

<style scoped lang="scss">
footer {
  --footer-spacer: calc(var(--spacer) * 2);
  display: grid;
  padding: var(--footer-spacer);
  margin-top: var(--footer-spacer);

  place-items: center;
  grid-auto-flow: column;

  background: var(--scheme-shade-7);
}
</style>
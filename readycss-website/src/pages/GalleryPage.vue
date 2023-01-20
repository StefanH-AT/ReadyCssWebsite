<template>

  <div>
    <h2>Gallery</h2>
    <ul class="gallery-list">
      <li><router-link to="/gallery/palette">Palette</router-link></li>
      <li><router-link to="/gallery/reel">Reel</router-link></li>
      <li><router-link to="/gallery/switcher">Switcher</router-link></li>
      <li><router-link to="/gallery/sidebar">Sidebar</router-link></li>
    </ul>
  </div>

</template>

<script lang="ts" setup>
</script>

<style scoped>

.gallery-list {
  margin-top: var(--spacer);
  list-style: square;
}

</style>
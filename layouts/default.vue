<template>

  <div class="theme-dark palette-default root">

    <TheNavbar/>

    <main>
      <slot></slot>
    </main>

    <TheFooter/>

  </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss">
.root {
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
}
</style>
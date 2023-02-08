<template>

  <div class="layout-docs">
    <the-navbar></the-navbar>
    <slot/>
    <the-footer></the-footer>
  </div>

</template>

<script setup lang="ts">
import TheFooter from "@/components/TheFooter.vue";
import TheNavbar from "@/components/TheNavbar.vue";
</script>

<style scoped>
.layout-docs {

}
</style>

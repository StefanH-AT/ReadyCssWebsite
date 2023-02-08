<template>

  <div class="layout-docs">
    <the-navbar></the-navbar>
    <main class="page page-reader">
      <article class="docs">
        <slot/>
      </article>
    </main>
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

article {
  margin-block: var(--space-m);
}
</style>

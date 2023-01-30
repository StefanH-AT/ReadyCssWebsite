<template>
  <main class="page page-reader page-vertically-centered">
    <section class="not-found">
      <h2 class="text-center">Woops...</h2>
      <p>This page doesn't exist.</p>

      <p>If you believe this is an error, please report this Issue on <a href="https://github.com/StefanH-AT/ReadyCssWebsite/issues">GitHub</a></p>

      <router-link to="/" class="btn"><i class="fas fa-arrow-left"></i> Back</router-link>
    </section>
  </main>
</template>

<script lang="ts" setup>
</script>

<style scoped>

.not-found h2 {
  font-size: 3rem;
  margin-bottom: 3rem;
  color: var(--scheme-main)
}

</style>
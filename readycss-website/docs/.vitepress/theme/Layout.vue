<script setup lang="ts">
import { useData } from 'vitepress'
import TheNavbar from "./TheNavbar.vue";
import TheFooter from "./TheFooter.vue";


const { site, frontmatter } = useData()
</script>

<template>

  <the-navbar/>
  <Content />
  <the-footer/>

</template>

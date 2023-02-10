<template>
  <component :is="currentLayout">
    <router-view></router-view>
  </component>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import {computed} from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import DocsLayout from "@/layouts/DocsLayout.vue";

const route = useRoute();

const currentLayout = computed(() => {
  switch (route.meta.layout) {
    case "docs":
      return DocsLayout;
    case "default":
    default:
      return DefaultLayout;
  }
});

</script>

<style scoped>

</style>
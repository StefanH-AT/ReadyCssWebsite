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
    case "default":
      return DefaultLayout;
    case "docs":
      return DocsLayout;
  }
});

</script>

<style scoped>

</style>
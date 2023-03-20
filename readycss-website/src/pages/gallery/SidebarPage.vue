<template>

  <h2>Sidebar</h2>
  <p>These are sidebars</p>

  <Sidebar side="left" sidebar-width="10rem" content-min-width="60%" space="3rem">
    <template v-slot:sidebar>
      <h3>Sidebar on left</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </template>
    <template v-slot:content>
      <h3>Content</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisl vitae nisl aliquet, nec aliquet nisl aliquet.
      </p>
    </template>
  </Sidebar>

  <hr>

  <Sidebar side="right" sidebar-width="10rem" content-min-width="60%" space="3rem">
    <template v-slot:sidebar>
      <h3>Sidebar on right</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </template>
    <template v-slot:content>
      <h3>Content</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisl vitae nisl aliquet, nec aliquet nisl aliquet.
      </p>
    </template>
  </Sidebar>

</template>

<script lang="ts" setup>
import Sidebar from "@/readyvue/layout/Sidebar.vue";
</script>

<style scoped>

</style>
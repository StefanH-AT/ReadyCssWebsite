<template>

  <div class="with-sidebar" v-if="props.side === 'left'">
    <div class="sidebar">
      <slot name="sidebar"></slot>
    </div>
    <div class="sidebar-content">
      <slot name="content"></slot>
    </div>
  </div>

  <div class="with-sidebar" v-else>
    <div class="sidebar-content">
      <slot name="content"></slot>
    </div>
    <div class="sidebar">
      <slot name="sidebar"></slot>
    </div>
  </div>

</template>

<script lang="ts" setup>
const props = defineProps<{
  side: {
    required: true,
    type: "left" | "right"
  },
  space: {
    required: false,
    type: String,
    default: "0"
  },
  sidebarWidth: {
    required: false,
    type: String,
    default: "0"
  },
  contentMinWidth: {
    required: true,
    type: String
  },
}>()
</script>

<style>

.with-sidebar {
  display: flex;
  flex-wrap: wrap;
  gap: v-bind("props.space");
}

.sidebar {
  flex-basis: v-bind("props.sidebarWidth");
  flex-grow: 1;
}

.sidebar-content {
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: v-bind("props.contentMinWidth");
}

</style>
<template>
  <div class="switcher">
    <slot/>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  limit: {
    required: false,
    type: Number,
    default: 10,
  },
  space: {
    required: false,
    type: String,
    default: "",
  },
  threshold: {
    required: true,
    type: Number,
  },
}>()
</script>

<style>

.switcher {
  display: flex;
  flex-wrap: wrap;
  gap: v-bind("props.space");
}

.switcher > * {
  width: 100%;
  flex-grow: 1;
  flex-basis: calc((v-bind("props.threshold") - 100%) * 999);
}

</style>

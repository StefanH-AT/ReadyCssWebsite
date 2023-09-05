<template>

  <h2>Switcher</h2>
  <p>Switchers automatically change their layout from columns to rows depending on the container's width.
    Unlike media query breakpoints, switchers operate on the <strong>container's</strong> size instead of an arbitrary screen size
  which allows for more flexibility.</p>

  <ReadySwitcher limit="4" threshold="40rem" space="2rem">
    <div class="item">Lorem ipsum</div>
    <div class="item">Lorem ipsum</div>
    <div class="item">Lorem ipsum</div>
    <div class="item">Lorem ipsum</div>
  </ReadySwitcher>

  <h3>Switcher with children of variable width</h3>
  <ReadySwitcher limit="4" threshold="40rem" space="2rem">
    <div class="item">Lorem ipsum</div>
    <div class="item item-wide">Lorem ipsum</div>
  </ReadySwitcher>

  <h3>Different thresholds</h3>

  <ReadySwitcher limit="5" threshold="20rem" space="2rem">
    <div class="item">Lorem ipsum</div>
    <div class="item">Lorem ipsum</div>
    <div class="item">Lorem ipsum</div>
  </ReadySwitcher>

  <hr/>

  <ReadySwitcher limit="5" threshold="40rem" space="2rem">
    <div class="item">Lorem ipsum</div>
    <div class="item">Lorem ipsum</div>
    <div class="item">Lorem ipsum</div>
  </ReadySwitcher>


</template>

<script lang="ts" setup>

</script>

<style scoped>

.item {
  background-color: var(--scheme-surface-0);
  padding: var(--space-m);
}

.item-wide {
  flex-grow: 2;
}

</style>
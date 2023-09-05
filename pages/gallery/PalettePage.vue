<template>

  <div class="page">

    <h2>Main Colors</h2>
    <div class="group">
      <div class="item">
        <div class="bubble" style="background-color: var(--scheme-main)"></div>Main
      </div>
      <div class="item">
        <div class="bubble" style="background-color: var(--scheme-background)"></div>Background
      </div>
      <div class="item">
        <div class="bubble" style="background-color: var(--scheme-foreground)"></div>Foreground
      </div>
      <div class="item">
        <div class="bubble" style="background-color: var(--scheme-shadow)"></div>Shadow
      </div>
      <div class="item">
        <div class="bubble" style="background-color: var(--scheme-surface-0)"></div>Surface 0
      </div>
    </div>
    <h2>Shades</h2>
    <div class="group">
      <div class="item">
        <div class="bubble" style="background-color: var(--scheme-shade-0)"></div>Shade 0
      </div>
      <div class="item">
        <div class="bubble" style="background-color: var(--scheme-shade-1)"></div>Shade 1
      </div>
      <div class="item">
        <div class="bubble" style="background-color: var(--scheme-shade-2)"></div>Shade 2
      </div>
      <div class="item">
        <div class="bubble" style="background-color: var(--scheme-shade-3)"></div>Shade 3
      </div>
      <div class="item">
        <div class="bubble" style="background-color: var(--scheme-shade-4)"></div>Shade 4
      </div>
      <div class="item">
        <div class="bubble" style="background-color: var(--scheme-shade-5)"></div>Shade 5
      </div>
      <div class="item">
        <div class="bubble" style="background-color: var(--scheme-shade-6)"></div>Shade 6
      </div>
      <div class="item">
        <div class="bubble" style="background-color: var(--scheme-shade-7)"></div>Shade 7
      </div>
      <div class="item">
        <div class="bubble" style="background-color: var(--scheme-shade-8)"></div>Shade 8
      </div>
      <div class="item">
        <div class="bubble" style="background-color: var(--scheme-shade-9)"></div>Shade 9
      </div>
    </div>

  </div>

</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">

.page {
  width: 100%;
}

.group {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 1rem;
  padding: 1rem;
}

h2 {
  color: var(--scheme-foreground);
  font-size: 1.5rem;
  text-transform: none;
}

.bubble {
  display: block;
  --bubble-size: 3rem;
  width: var(--bubble-size);
  height: var(--bubble-size);

  border-radius: 50%;
  border: 2px var(--scheme-shade-6) solid;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
}

</style>
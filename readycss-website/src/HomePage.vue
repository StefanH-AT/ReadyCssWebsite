<template>
<div class="home">

  <div class="banner">
    <h2>ReadyCSS</h2>
    <p>The only CSS library with a three layer color management system.</p>
  </div>

  <h2>Components</h2>

  <div class="components">

      <router-link class="component" to="/button">Buttons</router-link>
      <router-link class="component" to="/textinputs">Text Inputs</router-link>
      <router-link class="component" to="/check">Checkboxes</router-link>
      <router-link class="component" to="/radio">Radio Buttons</router-link>

  </div>

</div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss" scoped>

.home {

  h2 {
    text-align: center;
  }
}

.banner {
  h2 {
    font-size: clamp(2rem, 10vw, 5rem);
  }

  p {
    text-align: center;
  }

  min-height: 30vh;
}

section {
  margin-block: 2rem;
}

.components {
  --components-spacer: var(--spacer);

  display: flex;
  flex-wrap: wrap;
  gap: var(--components-spacer);

  justify-content: center;
}

.component {
  padding: var(--components-spacer);
  border: var(--border-width) solid var(--scheme-middleground);
  border-radius: var(--border-radius);
  text-align: center;

  flex-basis: 12rem;
}

</style>


<template>

  <h2>Checkboxes</h2>
  <div class="docs-group">
    <p>Checkboxes are created by adding add the <code>input-check</code> class to an HTML <code>input</code> of type <code>checkbox</code></p>
    <div class="callout">
      <div class="callout-head">
        <strong>Hint:</strong>
      </div>
      <div class="callout-body">
        <p>
          It is important the label is assigned the <code>for</code> attribute. This way, the box can be toggled by clicking the label, which can make it easier to point to.
        </p>
      </div>
    </div>
    <code-sample lang="html" preview :code="exampleSimple"/>

  </div>

  <div class="docs-group">
    <h3>Other icons</h3>
    <code-sample lang="html" preview :code="exampleCross"/>
  </div>

  <div class="docs-group">
    <h3>Palettes</h3>
    <p>Apply a palette to change the color of the checkbox</p>
    <code-sample lang="html" preview :code="examplePalette"/>
  </div>

</template>

<script lang="ts">
import CodeSample from "../../../../components/CodeSample.vue";
export default {
  components: {CodeSample},
  data() {
    return {
      exampleSimple: `<input class="checkbox" type="checkbox" id="check1">
<label for="check1">Check me out</label>`,
      exampleCross: `<input class="checkbox input-check-cross" type="checkbox" id="check2">
<label for="check2">Check me out</label>`,
      examplePalette: `<input class="checkbox palette-notice" type="checkbox" id="check3">
<label for="check3">Check me out</label>`
    }
  }
}
</script>

<style scoped lang="scss">

</style>
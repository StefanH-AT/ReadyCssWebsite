<template>

  <h2>Checkboxes</h2>
  <div class="docs-group">

    <div class="callout">
      <p>
        <strong>Hint:</strong>
        It is important the label is assigned the <code>for</code> attribute. This way, the box can be clicked by clicking the label, which can make it easier to point to.
      </p>
    </div>
    <code-sample lang="html" preview :code="exampleSimple"/>

  </div>

</template>

<script lang="ts">
import CodeSample from "./components/CodeSample.vue";
export default {
  components: {CodeSample},
  data() {
    return {
      exampleSimple: `<input class="input-check" type="checkbox" id="check1">
<label for="check1">Check me out</label>`
    }
  }
}
</script>

<style scoped lang="scss">

</style>
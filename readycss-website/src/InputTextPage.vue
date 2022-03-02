<template>

  <h2>Text Inputs</h2>
  <div class="docs-group">
    <p>Normal form text inputs. Uses the main color for focus state.</p>
    <code-sample lang="html" preview :code="exampleSimple"/>
  </div>
  <div class="docs-group">
    <div>
      <h3>Other styles</h3>
      <p>Other styles of inputs are available by appending an extra class.</p>
    </div>

    <div class="docs-subgroup">
      <div>
        <h4>Underline</h4>
        <p>Minimal border</p>
      </div>
      <code-sample lang="html" preview :code="exampleUnderline"/>
    </div>

    <div class="docs-subgroup">
      <div>
        <h4>Shift</h4>
        <p>
          Shifting inputs circumvent double labelling. They require a wrapper element to contain the animated label.
        </p>
      </div>
      <div  class="callout palette-notice">
        <p>
          <strong>Hack:</strong> Until the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:blank">:blank</a>  pseudo selector is fully supported in all browsers,
        the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown" class="no-break">:placeholder-shown</a> pseudo selector is used to determine when the input is empty.
          An empty <code>placeholder=""</code> attribute has to be added to the input until this is fixed.
        </p>
      </div>
      <code-sample lang="html" preview :code="exampleShift"/>

    </div>
  </div>

</template>

<script lang="ts">

import CodeSample from "./components/CodeSample.vue";
export default {
  components: {CodeSample},
  data() {
    return {
      exampleSimple: `<input type="text" class="input-text" placeholder="Enter text..."/>`,
      exampleUnderline: `<input type="text" class="input-text input-text-underline" placeholder="Enter text...">`,
      exampleShift:
`<div class="input-text-shift-wrapper">
  <input type="text" class="input-text" placeholder="">
  <label>Enter text...</label>
</div>
<div class="input-text-shift-wrapper">
  <input type="text" class="input-text input-text-underline" placeholder="">
  <label>Enter text...</label>
</div>`
    }
  }
}
</script>
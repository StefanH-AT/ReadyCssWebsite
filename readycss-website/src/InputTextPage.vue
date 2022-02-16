<template>

  <h2>Text Inputs</h2>
  <div class="docs-group">
    <p>Text inputs.</p>
    <code-sample lang="html" preview>
      <input type="text" class="input-text" placeholder="Enter text..."/>
    </code-sample>
  </div>
  <div class="docs-group">
    <div class="docs-subgroup">
      <h3>Other styles</h3>
      <p>Other styles of inputs are available by appending an extra class.</p>
    </div>

    <div class="docs-subgroup">
      <h4>Underline</h4>
      <code-sample lang="html" preview>
        <input type="text" class="input-text input-text-underline" placeholder="Enter text...">
      </code-sample>
    </div>

    <div class="docs-subgroup">
      <h4>Shift</h4>
      <p>
        Shifting inputs circumvent double labelling. They require a wrapper element to contain the animated label.
      </p>
      <p class="callout">
        <strong>Hack:</strong> Until the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:blank">:blank</a> is fully supported in all browsers,
      the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown">:placeholder-shown</a> selector is used to determine when the input is empty.
        An empty <code>placeholder=""</code> attribute has to be added to the input until this is fixed.
      </p>
      <code-sample lang="html" preview>
        <div class="input-text-shift-wrapper">
          <input type="text" class="input-text" placeholder="">
          <label>Enter text...</label>
        </div>
      </code-sample>
    </div>
  </div>

</template>

<script lang="ts">

import CodeSample from "./components/CodeSample.vue";
export default {
  components: {CodeSample}
}
</script>
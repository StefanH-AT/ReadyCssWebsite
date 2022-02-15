<template>

  <h2>Buttons</h2>
  <div class="docs-group">
    <p>
      Simple buttons. The default <code>.btn</code> class uses the main color.
    </p>
    <code-sample lang="html" preview>
      <button class="btn">Button</button>
    </code-sample>

  </div>
  <div class="docs-group">
    <h3>Color variants</h3>
    <p>
      The classes <code>.btn-fg</code> and <code>.btn-bg</code> can be used to apply the background or foreground colors to the button, instead of the main color.
    </p>
    <code-sample lang="html" preview>
      <button class="btn btn-fg">Foreground Button</button>
      <button class="btn btn-bg">Background Button</button>
    </code-sample>
  </div>
  <div class="docs-group">
    <h3>Palettes</h3>
    <p>
      Apply a palette class to the button to change the color.
    </p>
    <code-sample lang="html" preview>
      <button class="btn palette-notice">Button</button>
    </code-sample>
  </div>
  <div class="docs-group">
    <h3>Outline Buttons</h3>
    <p>
      Outlined buttons are often used to represent less common actions.
    </p>
    <code-sample lang="html" preview>
      <button class="btn btn-outline">Button</button>
      <button class="btn btn-outline palette-notice">Button</button>
      <button class="btn btn-outline btn-bg">Button</button>
      <button class="btn btn-outline btn-fg">Button</button>
    </code-sample>
  </div>

  <div class="docs-group">
    <h3>Properties</h3>
    <p>
      Further customization can be done via the CSS variables.
    </p>
    <table>
      <thead>
      <tr><th>Property name</th><th>Description</th></tr>
      </thead>
      <tbody>
      <tr><td><code>--btn-color</code></td><td>Main color of the button.</td></tr>
      <tr><td><code>--btn-text-color</code></td><td>Color of the text.</td></tr>
      <tr><td><code>--btn-hover-color</code></td><td>Color to be overlaid when hovering.</td></tr>
      <tr><td><code>--btn-bg</code></td><td>Color to apply to the background. Defaults to <code>--btn-color</code>.</td></tr>
      <tr><td><code>--btn-padding-vertical</code></td><td>Vertical padding.</td></tr>
      <tr><td><code>--btn-padding-horizontal</code></td>Horizontal padding.<td></td></tr>
      <tr><td><code>--btn-border-color</code></td><td>Color of the border. Defaults to <code>--btn-color</code>.</td></tr>
      <tr><td><code>--btn-border-width</code></td><td>Width of the border.</td></tr>
      <tr><td><code>--btn-border-radius</code></td><td>Radius of the border.</td></tr>
      <tr><td><code>--btn-focus-outline-width</code></td><td>Width of the focus outline.</td></tr>
      <tr><td><code>--btn-focus-outline-offset</code></td><td>Offset from the button of the focus outline</td></tr>
      <tr><td><code>--btn-focus-outline-color</code></td><td>Color of the focus outline. <strong>Important!</strong> Focus should always be visible and stand out on the page.</td></tr>
      <tr><td><code>--btn-outline-text-color</code></td><td>Color of the text on the <code>.btn-outline</code> variant</td></tr>
      </tbody>
    </table>
  </div>

</template>

<script lang="ts">
import CodeSample from "./components/CodeSample.vue";
export default {
  components: {CodeSample}
}
</script>

<style scoped lang="scss">


</style>
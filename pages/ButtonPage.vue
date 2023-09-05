<template>

  <h2>Buttons</h2>
  <div class="docs-group">
    <p>
      Simple buttons.
    </p>
    <code-sample lang="html" preview :code="examples.simple"/>

  </div>
  <div class="docs-group">
    <h3>Color variants</h3>
    <p>
      The classes <code>.btn-main</code> and <code>.btn-fg</code> can be used to apply the background or foreground colors to the button, instead of the main color.
    </p>
    <code-sample lang="html" preview :code="examples.variants"/>
  </div>
  <div class="docs-group">
    <h3>Palettes</h3>
    <p>
      Apply a palette class to the button to change the color.
    </p>
    <code-sample lang="html" preview :code="examples.palettes"/>
  </div>
  <div class="docs-group">
    <h3>Variations</h3>
    <p>
      Use one of the following classes to change the button's appearance.
    </p>
    <code-sample lang="html" preview :code="examples.variations"/>
  </div>
  <div class="docs-group">
  <h3>Groups</h3>
  <p>
    Use the <code>.btn-group</code> class to group buttons together.
  </p>
  <code-sample lang="html" preview :code="examples.groups"/>
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

<script lang="ts" setup>
import CodeSample from "../../../../components/CodeSample.vue";
const examples = {
  simple:
  `<button class="btn">Button</button>
<button class="btn" disabled>Disabled Button</button>`,
  variants:
  `<button class="btn btn-main">Main Color Button</button>
<button class="btn btn-fg">Foreground Button</button>`,
  palettes: `<button class="btn btn-main palette-notice">Button</button>`,
  variations:
  `<button class="btn btn-sm">Button</button>
<button class="btn btn-inline">Button</button>`,
  groups:
  `<div class="btn-group">
  <button class="btn">Button</button>
  <button class="btn">Button</button>
  <button class="btn">Button</button>
  <button class="btn">Button</button>
</div>`
}
</script>

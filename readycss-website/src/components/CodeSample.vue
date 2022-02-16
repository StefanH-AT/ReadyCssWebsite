<template>
  <div class="code-sample">
    <div class="code-sample-content" v-if="showPreview">
      <slot></slot>
    </div>
    <pre class="code-sample-code"><code class="hljs" v-html="code"></code></pre>
  </div>
</template>

<script lang="ts">

import * as hljs from "highlight.js";

export default {
  name: "CodeSample",
  props: {
    lang: {
      type: String,
      default: "plaintext"
    },
    preview: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      code: ""
    }
  },
  methods: {
    updateCode(code: string) {
      this.code += code + "\n";
    }
  },
  computed: {
    showPreview: (vm) => vm.preview && vm.lang.toLowerCase() == "html"
  },
  mounted() {
    this.$slots.default().forEach((slot) => {
        let html = slot.el.outerHTML;
        html = hljs.default.highlight(html, { language: this.lang }).value;
        this.updateCode(html);
    });
  }
}
</script>

<style scoped lang="scss">

.code-sample {

  --code-sample-spacer: var(--spacer);

  margin-top: var(--code-sample-spacer);

  > .code-sample-content {
    padding: var(--code-sample-spacer);
    border: var(--scheme-shade-7) solid var(--border-width);
    border-radius: var(--border-radius);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  // Selects only .code-sample-code elements that are after .code-sample-content
  .code-sample-content + .code-sample-code > code {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

}

</style>
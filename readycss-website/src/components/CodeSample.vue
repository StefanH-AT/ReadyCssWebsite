<template>
  <div class="code-sample">
    <div class="code-sample-content" v-if="showPreview" v-html="code">
    </div>
    <pre class="code-sample-code"><code class="hljs" v-html="highlightedCode"></code></pre>
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
    },
    code: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      highlightedCode: null as hljs.HighlightResult
    }
  },
  computed: {
    showPreview: (vm) => vm.preview && vm.lang.toLowerCase() == "html"
  },
  mounted() {
      this.highlightedCode = hljs.default.highlight(this.code, { language: this.lang }).value;
  }
}
</script>

<style scoped lang="scss">

.code-sample {

  --code-sample-spacer: var(--spacer);

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
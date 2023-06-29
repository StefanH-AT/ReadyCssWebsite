<template>
  <div class="code-sample" v-if="code">
    <div class="code-sample-content" v-if="shouldShowPreview" v-html="code">
    </div>
    <pre class="code-sample-code"><code class="hljs dynamic-font-size" v-html="highlightedCode"></code></pre>
  </div>
  <div v-else class="card card-main">
    Missing <code>code</code> attribute in code block
  </div>
</template>

<script lang="ts" setup>

import {ref, computed, onMounted} from "vue";
import * as hljs from "highlight.js";

const props = defineProps({
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
});

const highlightedCode = computed(() => {
  const highlighted = hljs.default.highlight(props.code, { language: props.lang });
  return highlighted ? highlighted.value : "";
})

const shouldShowPreview = computed(() => props.preview && props.lang.toLowerCase() == "html");

</script>

<style scoped lang="scss">

.code-sample {

  > .code-sample-content {
    background: var(--scheme-background);
    padding: var(--space-xs);
    border: var(--scheme-surface-0) solid var(--stroke);
    border-radius: var(--radius);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  // Selects only .code-sample-code components that are after .code-sample-content
  .code-sample-content + .code-sample-code > code {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .code-sample-code > code {
    font-size: var(--step--1);
  }

}

</style>
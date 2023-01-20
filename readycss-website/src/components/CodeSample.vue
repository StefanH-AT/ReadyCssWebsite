<template>
  <div class="code-sample" v-if="code">
    <div class="code-sample-content" v-if="shouldShowPreview" v-html="code">
    </div>
    <pre class="code-sample-code"><code class="hljs" v-html="highlightedCode"></code></pre>
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

const highlightedCode = ref<hljs.HighlightResult>(null);

const shouldShowPreview = computed(() => props.preview && props.lang.toLowerCase() == "html");

onMounted(() => {
    updateHighlighting();
});

function updateHighlighting() {
    if(props.code) {
      const highlighted = hljs.default.highlight(props.code, { language: props.lang });
      highlightedCode.value = highlighted ? highlighted.value : "";
    }
}

</script>

<style scoped lang="scss">

.code-sample {

  --code-sample-spacer: var(--spacer);

  > .code-sample-content {
    padding: var(--code-sample-spacer);
    border: var(--scheme-shade-7) solid var(--border-width);
    border-radius: var(--radius);
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
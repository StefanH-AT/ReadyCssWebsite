<template>
<footer>
  <div class="sitemap">
    <h2>More</h2>

    <Switcher threshold="30rem" space="2rem" limit="3">

      <div class="sitemap--group">
        <h3>Repositories</h3>
        <ul>
          <li>
            <a href="https://github.com/StefanH-AT/ReadyCSS">ReadyCSS Repository</a>
          </li>
          <li>
            <a href="https://github.com/StefanH-AT/ReadyCSSWebsite">Website Repository</a>
          </li>
        </ul>
      </div>

      <div class="sitemap--group">
        <h3>Docs</h3>
        <ul>
          <li>
            <a href="/docs">Getting Started</a>
          </li>
          <li>
            <a href="/examples">Examples</a>
          </li>
        </ul>
      </div>

    </Switcher>


  </div>
  <div class="copyright">
    <p>Copyright &copy; 2021 - {{ currentYear }} Stefan Heinz</p>
  </div>
</footer>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import Switcher from "@/components/layout/Switcher.vue";

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped lang="scss">
footer {

}


.sitemap {
  display: grid;
  padding-block: 2rem;
  padding-inline: calc((100% - var(--page-width-reader)) / 2);
  margin-top: 5rem;

  border-top: var(--border-width) solid var(--scheme-surface-0);
  border-bottom: var(--border-width) solid var(--scheme-surface-0);

  h2 {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: normal;
  }
}

.sitemap-groups {
  margin-top: 2rem;
}

.sitemap--group {

  li {
    margin-block: 0.25rem;
  }
  a {
    color: var(--scheme-text-muted-color);
    text-decoration: none;
  }
}

.copyright {
  text-align: center;
  color: var(--scheme-text-muted-color);

  padding-block: 2rem;

  p {
    margin: 0;
  }
}
</style>
<template>
  <header class="nav">
    <h1>ReadyCSS</h1>
    <nav>
      <ul class="nav-list horizontal align-end">
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
        <li>Item4</li>
      </ul>
      <button @click="toggleTheme">Theme</button>
    </nav>
  </header>
  <main>
    <div class="card palette-notice">
      <header>Card Title</header>
      <div>Lorem ipsum dolor sit amet</div>

      <button class="btn">Button</button>
      <footer>Card footer</footer>
    </div>

    <section>
      <h2>Buttons</h2>
      <div>
        <a href="#" class="btn">Button</a>
        <a href="#" class="btn btn-outline">Button</a>
      </div>
      <div class="palette-notice">
        <a href="#" class="btn">Button</a>
        <a href="#" class="btn btn-outline">Button</a>
      </div>
    </section>
    <section>
      <h2>Text Input</h2>

      <div>
        <input class="input-text" placeholder="Text Input">
        <input class="input-text input-text-underline" placeholder="Text Input">
      </div>
      <div class="palette-notice">
        <input class="input-text" placeholder="Text Input">
        <input class="input-text input-text-underline" placeholder="Text Input">
      </div>

    </section>

    <section>
      <h2>Checkboxes</h2>

      <div>
        <input id="check1" type="checkbox" class="input-check">
        <label for="check1">Checkbox</label>
      </div>
      <div class="palette-notice">
        <input id="check2" type="checkbox" class="input-check">
        <label for="check2">Checkbox</label>
      </div>
    </section>

    <section>
      <h2>Radio Buttons</h2>

      <div>
        <div>
          <input id="radio1" type="radio" class="input-radio" name="radios">
          <label for="radio1">Radio Button 1</label>
        </div>
        <div>
          <input id="radio2" type="radio" class="input-radio" name="radios">
          <label for="radio2">Radio Button 2</label>
        </div>
        <div>
          <input id="radio3" type="radio" class="input-radio" name="radios">
          <label for="radio3">Radio Button 3</label>
        </div>
      </div>

    </section>

  </main>
</template>

<script lang="ts">
export default {
  methods: {
    toggleTheme() {
      document.querySelector("html").classList.toggle("theme-dark");
    }
  }
}
</script>

<style lang="scss" scoped>

main {
  margin-inline: auto;
  max-width: 70rem;
}

.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-size: 1.6rem;
  }
}

nav {
  display: flex;
}

section {
  margin-block: 2rem;
}

</style>


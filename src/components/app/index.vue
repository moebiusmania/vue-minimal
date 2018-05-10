<template>
  <div id="app">
    <section>
      <h1 v-bind:class="styles.title">Hello, {{name_}}</h1>
      <article v-bind:class="styles.content">
        <lorem-element :url="url"></lorem-element>
      </article>
    </section>
  </div>
</template>

<script>

import styles from './style.scss';
import pkg from './../../../package.json';
import LoremElement from './../lorem/index.vue';

export default {
  components: {
    LoremElement
  },
  props: {
    name: String
  },
  data () {
    return {
      styles,
      url: pkg.homepage,
      name_: this.name || pkg.name
    }
  }
}

</script>

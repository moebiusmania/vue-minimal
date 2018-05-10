import Vue from 'vue';
import App from './components/app/index.vue';

import './globals.css';

new Vue({
  el: '#app',
  render: h => h(App)
});
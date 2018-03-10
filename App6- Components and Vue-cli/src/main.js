import Vue from 'vue'
import App from './App.vue'

import AppHead from './App-Header.vue'
import AppPrompt from './App-LiveMms.vue'

Vue.component('App-Header', AppHead);
Vue.component('App-mms',  AppPrompt);

new Vue({
  el: '#app',
  render: h => h(App)
})

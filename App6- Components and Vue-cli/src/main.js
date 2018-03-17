import Vue from 'vue'
import App from './App.vue'

import AppHead from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

// Making a 2 global components
Vue.component('App-Header', AppHead);
Vue.component('App-Footer', AppFooter);

new Vue({
      el: '#app',
      render: h => h(App)
})
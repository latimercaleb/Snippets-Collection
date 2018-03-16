import Vue from 'vue'
import App from './App.vue'

// Components typically follow PascalCasing Naming, fix this
import AppHead from './AppHeader.vue'
import AppPrompt from './AppLiveMms.vue'
import AppFooter from './AppFooter.vue'
import ServerList from './ServerList.vue'
// Make some of these local to the App.vue file
Vue.component('App-Header', AppHead);
Vue.component('App-mms', AppPrompt);
Vue.component('AppFooter', AppFooter);
Vue.component('ServerList', ServerList);

new Vue({
      el: '#app',
      render: h => h(App)
})
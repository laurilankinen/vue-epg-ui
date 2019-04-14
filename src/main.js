import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// add cordova.js only if serving the app through local dev env
if (window.location.protocol === 'file:' || window.location.port === '8080') {
  const cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

const startApp = () => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

document.addEventListener('deviceready', startApp, false)

// Start app in development (ie. cordova run browser / npm run dev)
if (!window.cordova) {
  startApp()
}

import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
import * as VueGoogleMaps from 'vue2-google-maps'
//import 'vue-googlemaps/dist/vue-googlemaps.css'
//import VueGoogleMaps from 'vue-googlemaps'
import axios from 'axios'
import '@/assets/css/style.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Nprogress from 'nprogress'
import Toasted from 'vue-toasted'
var SocialSharing = require('vue-social-sharing')
import VueSilentbox from 'vue-silentbox'

Vue.config.productionTip = false

Vue.use(Nprogress)
Vue.use(axios)
Vue.use(VeeValidate)
Vue.use(require('vue-moment'))
Vue.use(Toasted)
Vue.use(SocialSharing)
Vue.use(VueSilentbox);

/*Vue.use(VueGoogleMaps, {
  load: {
    // Google API key
    apiKey: 'AIzaSyD-rdRygIIUU40ksaF8ZGZ1n8rfsMdM0xc',
    // Enable more Google Maps libraries here
    libraries: ['places'],
    // Use new renderer
    useBetaRenderer: false,
  }
})*/

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD-rdRygIIUU40ksaF8ZGZ1n8rfsMdM0xc',
    //key: 'AIzaSyD0dmlob5GrKaKTRswuV3hpMjRuvb78JUI',
    libraries: 'places',
    // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})


axios.defaults.baseURL = 'http://dev.woobii.com/admin/';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
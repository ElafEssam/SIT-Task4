import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import vueRouters from 'vue-router';
import axios from 'axios';

import VueAxios from "vue-axios";

Vue.use(vueRouters)
Vue.use(VueAxios,axios)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
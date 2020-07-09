import Vue from "vue";
import ElementUI from "element-ui";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/index.scss";
import VuePlyr from "vue-plyr";
import "vueperslides/dist/vueperslides.css";
import StarRating from "vue-star-rating";

import axios from "axios";
import VueAxios from "vue-axios";
import Default from "./layouts/Default.vue";
import Blank from "./layouts/Blank.vue";
import Dashboard from "./layouts/Dashboard.vue";

Vue.component("star-rating", StarRating);
Vue.component("default-layout", Default);
Vue.component("blank-layout", Blank);
Vue.component("dashboard-layout", Dashboard);

Vue.config.productionTip = false;
Vue.use(VuePlyr);
Vue.use(VueAxios, axios);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

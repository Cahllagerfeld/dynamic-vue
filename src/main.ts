import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//PrimeVue
import PrimeVue from "primevue/config";
Vue.use(PrimeVue);
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

//CompositionApi
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);

store.dispatch("getUI");

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

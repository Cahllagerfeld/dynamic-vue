import unfetch from "unfetch";
import Vue from "vue";
import router from "../router/index";
import DynamicView from "../views/DynamicView.vue";
import Vuex from "vuex";

Vue.use(Vuex);

export interface View {
  id: number;
  name: string;
  apiPath: string;
  routerPath: string;
  containers: any[];
}

export interface Config {
  views: View[];
}

export default new Vuex.Store({
  state: {
    ui: {},
  },
  mutations: {
    updateUI(state, payload) {
      state.ui = payload;
    },
  },
  actions: {
    async getUI({ commit }) {
      const response = await unfetch("http://localhost:3000/config");
      const data = await response.json();
      data.views.forEach((view: View) => {
        router.addRoute({
          path: view.routerPath,
          component: DynamicView,
          props: view,
        });
      });

      commit("updateUI", data);
    },
  },
  modules: {},
});

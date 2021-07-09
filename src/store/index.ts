import unfetch from "unfetch";
import Vue from "vue";
import router from "../router/index";
import DynamicView from "../views/DynamicView.vue";
import Vuex from "vuex";
import _ from "lodash";

Vue.use(Vuex);

const baseUrl = "http://localhost:3000";

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
    data: {},
    loading: false,
  },
  mutations: {
    updateUI(state, payload) {
      state.ui = payload;
    },
    updateData(state, payload) {
      state.data = payload;
    },
    updateLoading(state, payload: boolean) {
      state.loading = payload;
    },
  },
  actions: {
    async getUI({ commit }) {
      const response = await unfetch(`${baseUrl}/config`);
      const data = await response.json();
      data.views.forEach((view: View) => {
        router.addRoute({
          path: view.routerPath,
          component: DynamicView,
          props: { view },
        });
      });

      commit("updateUI", data);
    },
    async getData({ commit }, { apiPath }: { apiPath: string }) {
      commit("updateLoading", true);
      const response = await unfetch(baseUrl + apiPath);
      const data = await response.json();
      commit("updateLoading", false);
      commit("updateData", data);
    },
  },
  modules: {},
});

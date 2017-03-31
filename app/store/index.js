import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Vue.js'
  },
  mutations: {
    updateTitle(state, value) {
      state.title = value;
    }
  }
});

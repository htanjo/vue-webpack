import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: ['Webpack', 'Babel', 'Yarn', 'Sass', 'ESLint', 'UglifyJS']
  },
  mutations: {
    addItem(state, value) {
      state.items.push(value);
    }
  }
});

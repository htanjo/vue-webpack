import './main.scss';
import Vue from 'vue';
import App from './components/App.vue';
import store from './store';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App />',
  components: {App}
});

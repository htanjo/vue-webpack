import Vue from 'vue';
import './main.scss';
import App from './components/App.vue';
import store from './store';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
});

<template>
  <div class="app">
    <img src="../images/logo.png">
    <h1>{{message}}</h1>
    <form @submit.prevent="addItem">
      <input type="text" v-model.trim="item">
      <button>Add</button>
    </form>
    <list :items="this.items"></list>
  </div>
</template>

<script>
import List from './List.vue';
import {mapState} from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      item: 'Vue.js'
    };
  },
  computed: {
    ...mapState(['items']),
    message() {
      return this.item ? `Hello ${this.item}!` : 'Any other items?';
    }
  },
  methods: {
    addItem() {
      if (!this.item) {
        return;
      }
      this.$store.commit('addItem', this.item);
      this.item = '';
    }
  },
  components: {List}
};
</script>

<style lang="scss" scoped>
.app {
  width: 480px;
  margin: 40px auto;
  text-align: center;
}
h1 {
  font-weight: normal;
  color: #42b983;
}
form {
  margin-bottom: 40px;
  input {
    padding: 4px 8px;
    font-size: 100%;
  }
  button {
    padding: 4px 8px;
    font-size: 100%;
  }
}
</style>

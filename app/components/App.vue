<template>
  <div class="app">
    <img src="../images/logo.png">
    <p>{{message}}</p>
    <input type="text" v-model="title">
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    title: {
      get() {
        return this.$store.state.title;
      },
      set(value) {
        this.$store.commit('updateTitle', value);
      }
    },
    message() {
      return `Hello, ${this.title}!`;
    }
  }
};
</script>

<style lang="scss" scoped>
.app {
  margin: 50px;
  text-align: center;
  font-family: sans-serif;
  p {
    font-weight: bold;
  }
}
</style>

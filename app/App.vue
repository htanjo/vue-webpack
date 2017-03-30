<template>
  <div id="app">
    <img src="./images/logo.png">
    <p>{{message}}</p>
    <input type="text" v-model="message">
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      message: 'Hello, Vue.js!'
    };
  }
};
</script>

<style lang="scss" scoped>
#app {
  margin: 50px;
  text-align: center;
  font-family: sans-serif;
  p {
    font-weight: bold;
  }
}
</style>

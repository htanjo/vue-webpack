<template>
  <div class="app" v-bind:class="theme">
    <img src="../images/logo.png">
    <h1>{{message}}</h1>
    <input type="text" v-model="title">
    <div class="switch">
      <label><input type="radio" v-model="theme" value="day"> Day</label>
      <label><input type="radio" v-model="theme" value="night"> Night</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      theme: 'day'
    };
  },
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
      const greeting = this.theme === 'night' ? 'Good night' : 'Hello';
      return `${greeting}, ${this.title}!`;
    }
  }
};
</script>

<style lang="scss" scoped>
.app {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 50px;
  text-align: center;
  transition: 0.4s all;
  &.night {
    color: #ccc;
    background-color: #222;
  }
}
h1 {
  font-weight: normal;
  color: #42b983;
}
input[type=text] {
  padding: 4px 8px;
  font-size: 100%;
}
.switch {
  margin-top: 10px;
}
</style>

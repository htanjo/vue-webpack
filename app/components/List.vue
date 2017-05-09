<template>
  <div class="list">
    <a v-for="item in items" class="item" :href="`https://www.google.com/search?btnI&q=${item}`">
      {{item}}
    </a>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['items']
};
</script>

<style lang="scss" scoped>
.list {
  text-align: left;
}
.item {
  display: inline-block;
  margin: 0 10px 10px;
  color: #2973b7;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>

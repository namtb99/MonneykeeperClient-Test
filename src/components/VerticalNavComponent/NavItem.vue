<template>
  <b-nav-item>
    <router-link v-bind:to="path">
      <div class="nav-item">{{content}}</div>
    </router-link>
  </b-nav-item>
</template>

<script>
export default {
  name: "NavItem",
  props: ["path", "content"]
};
</script>

<style scoped lang="scss">
a {
  font-weight: bold;
  color: white;
  padding: 0;
  .nav-item {
    height: 80px;
  }
  .nav-item:hover {
      background-color: #5B87F8;
  }
  &.router-link-exact-active {
    color: #F79D32;
  }
}
</style>
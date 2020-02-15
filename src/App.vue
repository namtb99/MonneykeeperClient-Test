<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">
          <img src="http://mobilemoneykeeper.com/Content/images/logo_ant.png"/>
          LOGO
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <nav-item path="/" content="Tổng quan"></nav-item>
            <nav-item path="/notebook" content="Sổ ghi chép"></nav-item>
            <nav-item path="/expensinglimit" content="Hạn mức chi"></nav-item>
            <nav-item path="/wallet" content="Tài khoản"></nav-item>
            <nav-item path="/statistic" content="Báo cáo"></nav-item>
            <nav-item path="/other" content="Khác"></nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <b-nav vertical id="nav">
      <b-col md="4">
          
      </b-col>
      <nav-item path="/" content="Tổng quan"></nav-item>
      <nav-item path="/notebook" content="Sổ ghi chép"></nav-item>
      <nav-item path="/expensinglimit" content="Hạn mức chi"></nav-item>
      <nav-item path="/wallet" content="Tài khoản"></nav-item>
      <nav-item path="/statistic" content="Báo cáo"></nav-item>
      <nav-item path="/other" content="Khác"></nav-item>
    </b-nav>
    <router-view />
  </div>
</template>

<script>
import NavItem from "./components/VerticalNavComponent/NavItem";
export default {
  components: {
    NavItem
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px 0;
  background-color: #14b5f1;
  float: left;
  width: 80px;
  height: 970px;
  position: fixed;
}
</style>

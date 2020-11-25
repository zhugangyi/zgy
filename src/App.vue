<template>
  <div id="app">
    <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
    </keep-alive>
    <route-view v-if="!$route.meta.keepAlive"></route-view>

  </div>
</template>

<script>
export default {
  name:'app',
  components: {

  },
}
</script>

<style lang="scss">
#app {
  position: absolute;
  /* line-height: 50px; */
  top: 0px;
  left: 0px;
  right: 0px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  margin-top: 0px;
}
</style>
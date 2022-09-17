<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Login/index.vue'
export default {
  data() {
    return {}
  },
  mounted() {},
  components: { Login },
}
</script>

<style lang="less"></style>

<template>
  <div id="app">
    <!-- <add-block></add-block> -->
    <!-- <show-block></show-block> -->
    <block-header></block-header>
    <router-view></router-view>
  </div>
</template>

<script>
/*import AddBlock from './components/AddBlock'
import ShowBlock from './components/ShowBlock'*/
import BlockHeader from './components/BlockHeader'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  // 组件注册
  components: {
   /* "add-block":AddBlock,
    "show-block":ShowBlock,*/
    "block-header":BlockHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body,html{
  margin: 0;
  padding: 0;
}
</style>

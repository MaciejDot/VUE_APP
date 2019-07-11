<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>
<navbar>
<router-link

>
<!--:to!-->
</router-link>
</navbar>
<router-view
  :key="$router.fullPath"
/>
<script>
import navbar from 'vue-strap'
import HelloWorld from './components/HelloWorld'
export default {
  name: 'app',
  
  components: {
    HelloWorld,
    navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

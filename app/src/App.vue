<template>
  <div id="app">
    <div id ="menu">
      <a>element</a>
      <router-link
        :to="{ name: 'workout'}"
        >
        database
      </router-link>
      </div>
    <router-view/>
  </div>
</template>

<router-view
  :key="$router.fullPath"
/>
<script>
export default {
  name: 'app'
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

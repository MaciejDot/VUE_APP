<template>
  <div id="app" style="margin-top:0px">
  <div class="navbar navbar-expand-lg navbar-light bg-light bg-color transparent" style="box-shadow: 2px 2px 5px 0px rgba(120,111,120,1);">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <div>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link 
          class="nav-link"
          :to="{name:'Main Page'}">Main Page</router-link>
      </li>
      <li class="nav-item">
        <router-link 
          class="nav-link"
          to="/wiki">Exercises Wiki</router-link>
      </li>
      <li class="nav-item">
        <router-link
            class="nav-link"
            to="/workout">Workout Program</router-link>
      </li>
      <li class="nav-item">
      <router-link 
            class="nav-link"
            to="/Forum">Forum</router-link>
      </li>
      <li class="nav-item">
        <router-link
            class="nav-link"
            to="/articles">Articles</router-link>
      </li>
    </ul>
    </div>
  </div>
  
  </div>
  
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

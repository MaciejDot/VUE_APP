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
          to="/exercises">Exercises Wiki</router-link>
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
      <li class="nav-item">
        <router-link
            class="nav-link"
            to="/defaultPost">Default Post</router-link>
      </li>
    </ul>
    </div>
  </div>
  
  </div>
  <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none; z-index: -100;">
  <div class="image-background"></div>
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
.image-background{
  background-position: 0% 50%; background-size: 100%; background-repeat: no-repeat; 
  background-image: url('/background.jpg'); 
  position: fixed; top: 0px; 
  left: 0px; overflow: hidden; pointer-events: none; 
  margin-top: 61.5px; visibility: visible; transform: translate3d(0px, -61.5px, 0px);
}

@media (max-width: 450px){
  .image-background {
        width: 600px;
        height: 400px;
    }
}

@media (max-width:600px) and (min-width:451px) {
  .image-background {
        width: 900px;
        height: 600px;
    }
}

@media (max-width:900px) and (min-width:601px) {
  .image-background {
        width: 1200.164px; 
        height: 800px;
    }
}

@media (max-width:1200px) and (min-width:901px) {
  .image-background {
        width: 1500.164px; 
        height :900px;
    }
}

@media (max-width:1500px) and (min-width:1201px) {
  .image-background {
      width: 1800.164px;
      height: 1000px; 
    }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

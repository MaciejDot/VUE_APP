<template>
    <div id="app" ref="app">
      <div style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; pointer-events: none; z-index: -100;">
      <div class="image-background"></div>
      </div>
      HELLO?!?!?
    </div>
</template>
<script>
  export default {
    name: 'MainPage'
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
</style>

 
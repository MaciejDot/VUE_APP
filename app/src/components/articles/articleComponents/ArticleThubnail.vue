<template>
<div style="padding: 5px;">
  <div class="holder" style="background-color:#f8f9fa!important;border-radius:10px;padding:10px;">
  <img src=`${imagePath}`/>
  <h2 class="article-title">
{{title}}
  </h2>
  <div>
  {{shortDescription}}
  </div>
  </div>
</div>

</template>
<script>
export default {
    name:'ArticleThumbnail',
    props: ['imagePath','title','shortDescription']

}
</script>
<style>
.article-title {
  color :black;
  font-family: Georgia, serif;
}
.thumbnail-image{
    background-position: 0% 50%; background-size: 100%; background-repeat: no-repeat; 
    background-image: url('/background.jpg'); 
    position: fixed; top: 0px; 
    left: 0px; overflow: hidden; pointer-events: none; 
    margin-top: 61.5px; visibility: visible; transform: translate3d(0px, -61.5px, 0px);
}
@media (min-width: 450px){
  .image-background {
        width: 380px;
        height: 300px;
    }
    .holder{
      min-height:400px;
    }
}
@media (max-width: 449px) and (min-width: 300 px){
  .image-background {
        width: 280px;
        height: 200px;
    }
    .holder{
      min-height:300px;
    }
}
@media (max-width: 299 px){
  .image-background {
        width: 200px;
        height: 150px;
    }
    .holder{
      min-height:250px;
    }
}
</style>
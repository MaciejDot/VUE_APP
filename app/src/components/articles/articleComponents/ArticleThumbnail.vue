<template>
<div style="padding: 5px;">
  <div class="holder" style="background-color:#f8f9fa!important;border-radius:10px;padding:10px;">
  <div 
    class="thumbnail-image" 
    :style='`background-image: url(`+imagePath+`);`' 
  >
  </div>
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
    margin-top: 61.5px; visibility: visible;
}
@media (min-width: 450px){
  .thumbnail-image {
        min-width: 380px;
        min-height: 300px;
        max-width: 380px;
        max-height: 300px;
    }
    .holder{
      min-height:400px;
    }
}
@media (max-width: 449px) and (min-width: 300 px){
  .thumbnail-image {
        min-width: 280px;
        min-height: 200px;
        max-width: 280px;
        max-height: 200px;
    }
    .holder{
      min-height:300px;
    }
}
@media (max-width: 299 px){
  .image-background {
        min-width: 200px;
        min-height: 150px;
        max-width: 200px;
        max-height: 150px;
    }
    .holder{
      min-height:250px;
    }
}
</style>
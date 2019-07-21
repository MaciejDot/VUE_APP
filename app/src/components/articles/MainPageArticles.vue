<template>
<div>
    <h1 style="color :black;
  font-family: Georgia, serif;">
      Articles
    </h1>
    <div class="row">
    <div class="col-md-6 col-xl-4">
     <ArticleThumbnail imagePath='/background.jpg' title ='example A' shortDescription='example B'/>
    </div>
    <div class="col-md-6 col-xl-4">
     <ArticleThumbnail imagePath='/background.jpg' title ='example A' shortDescription='example B'/>
    </div>
    <div class="col-md-6 col-xl-4">
     <ArticleThumbnail imagePath='/background.jpg' title ='example A' shortDescription='example B'/>
    </div>
   </div>
    </div>
  </template>
<script>
import ArticleThumbnail from './articleComponents/ArticleThumbnail.vue'
export default {
    name: 'MainPageArticles',
    components:{
      ArticleThumbnail
    }
  }
</script>
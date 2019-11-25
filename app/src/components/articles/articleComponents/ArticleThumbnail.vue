<template>
<div @click="resolveLink()">
<div style="padding: 5px;cursor: pointer;">
  <b-card style="background-color:#f8f9fa!important;border-radius:10px;box-shadow: 2px 2px 5px 0px rgba(120,111,120,1);margin-left: auto;
    margin-right: auto;max-width:1000px;">
  <b-row>
    <b-col sm="12" md="4">
  <img 
    class="thumbnail-image" 
    :style='`background-image: url(`+imagePath+`);`' 
  />
  </b-col>
  <b-col sm="12" md="8">
  <h2 class="article-title">
{{title}}
  </h2>
  <b-media>
  {{shortDescription}}
  </b-media>
  </b-col>
  </b-row>
  <b-row>
    <b-col>
      {{author}}
    </b-col>
    <b-col>
      {{date}}
      </b-col>
  </b-row>
  </b-card>
</div>
</div>
</template>
<script>
import {BCard, BMedia, BRow, BCol} from 'bootstrap-vue'
export default {
    name:'ArticleThumbnail',
    props: ['author','imagePath','title','shortDescription','date','to'],
    components: {BCard, BMedia, BRow, BCol},
    methods:{
      resolveLink(){
        if(this.to!=0){
         this.$router.push({path:`/article/${this.to}`});
        }
        else{
          this.$router.push({path:"/create-article"})
        }
      }
    }

}
</script>
<style scoped>
.article-title {
  color :black;
  font-family: Georgia, serif;
}
.thumbnail-image{
    background-position: 0% 50%; 
    background-size: 100%; 
    background-repeat: no-repeat;
    margin-top: 0px; 
    visibility: visible;
    border-radius: 10px;
    margin: 0;
    border-radius:10px;
    width: -webkit-fill-available;
    padding-top: 62.5%;
}
</style>
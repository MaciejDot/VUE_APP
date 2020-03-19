<template>
<div @click="resolveLink()">
<div style="padding: 5px;cursor: pointer;">
  <b-card style="border-radius: 3px;
    border: 1px solid #e7e7e7;margin-left: auto;
    margin-right: auto;max-width:1000px; margin-bottom:30px;">
  <b-row>
    <b-col sm="12" md="6">
  <img 
    class="thumbnail-image" 
    :style='`background-image: url(`+imagePath+`);`' 
  />
  </b-col>
  <b-col sm="12" md="6">
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
      {{dateCreated}}
      </b-col>
  </b-row>
  </b-card>
</div>
</div>
</template>
<script>
import {BCard, BMedia, BRow, BCol} from 'bootstrap-vue'
import {getFormattedDate} from "../../../library/dateFormatter.js"
export default {
    name:'ArticleThumbnail',
    props: ['author','imagePath','title','shortDescription','date','to'],
    components: {BCard, BMedia, BRow, BCol},
    data: function(){
      return{
        dateCreated: getFormattedDate(this.date)
      }
    },
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
    visibility: visible;
    margin: 0;
    width: -webkit-fill-available;
    padding-top: 62.5%;
}
</style>
<template>
<div style="padding:5px;">
  <b-card style="border-radius: 3px;
    border: 1px solid #e7e7e7;padding:10px;min-height:500px;box-shadow: 2px 2px 5px 0px rgba(120,111,120,1);margin-left: auto;
    margin-right: auto;max-width:1000px; text-align:auto;">
  <b-media style="position:relative;min-height:500px;">
   <div style="text-align:left;">{{author}}</div>
   <div v-for="(contentLine,index) in content" :key="index">
    <div class="row" v-html ="contentLine" />
    </div>
    <div style="text-align:right; border-top-style: solid; border-top-width: thin;position:absolute;width:100%;bottom: 5px;">
        {{date}}
    </div>
    </b-media>
  </b-card>
</div>
</template>
<script>
import {BCard, BMedia} from 'bootstrap-vue'
export default {
    name: 'ForumPost',
    props:['title','content','author','date'],
    components: {BCard, BMedia}
  }
</script>
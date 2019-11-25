<template>
<div style="padding:5px;"
v-on:click="resolveLink()"
>
  <b-card  style="background-color:#f8f9fa!important;border-radius:10px;padding:5px;min-height:100px;cursor:pointer;box-shadow: 2px 2px 5px 0px rgba(120,111,120,1);">
  
        <div><strong>Create a new Wiki Exercise</strong></div>
    <b-media>
    </b-media>
  </b-card >
</div>
</template>
<script>
import {BCard, BMedia, } from 'bootstrap-vue'
export default {
    name:'WikiAddArticle',
    props :['link'],
    components:{
      BCard,
      BMedia
    },
    methods:{
    resolveLink: function(){
        this.$router.push({path:this.link});
      }
    }
}
</script>
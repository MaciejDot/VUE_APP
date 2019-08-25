<template>
<div style="padding:5px;"
v-on:click="resolveLink()"
>
  <b-card  style="background-color:#f8f9fa!important;border-radius:10px;padding:5px;min-height:100px;cursor:pointer;box-shadow: 2px 2px 5px 0px rgba(120,111,120,1);">
  
        <div style="text-align:left;"><strong>{{title}}</strong></div>
    <b-media>
        <div style="text-align:left;">
            replies count : {{replies}}
        </div>
    </b-media>
  </b-card >
</div>
</template>
<script>
import {BCard, BMedia} from 'bootstrap-vue'
export default {
    name:'ForumThread',
    props :['title','link','op','replies','created'],
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
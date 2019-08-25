<template>
<div v-on:click="resolveLink()">
<div style="padding: 5px;cursor: pointer;">
  <div class="holder" style="background-color:#f8f9fa!important;border-radius:10px;padding:10px;box-shadow: 2px 2px 5px 0px rgba(120,111,120,1);">
  <div style="position:inherit;">
  <div>
  <img 
    class="thumbnail-image" 
    :style='`margin: 0;border-radius:10px;margin-left: auto;
    margin-right: auto;background-image: url("`+thumbnail+`");`'
  />
  </div>
  </div>
  <h2 class="article-title">
{{title}}
  </h2>
  <div>
  {{description}}
  </div>
  </div>
</div>
</div>
</template>
<script>
export default {
    name:'ForumSubject',
    props :['title','description','link','thumbnail'],
    data:function(){
      return{
        goToLocation:''
      }
    },
    methods:{
      resolveLink: function(){
        this.$router.push({path:this.link});
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
    background-position: 0% 50%; background-size: 100%; background-repeat: no-repeat;
    margin-top: 61.5px; visibility: visible;border-radius: 10px;
        width: -webkit-fill-available;
    padding-top: 62.5%;
}
    .holder{
      max-height:500px;
    }
</style>
<template>
<div style="padding:5px;"
v-on:click="resolveLink()"
>
  <div style="background-color:#f8f9fa!important;border-radius:10px;padding:5px;min-height:100px;cursor:pointer;box-shadow: 2px 2px 5px 0px rgba(120,111,120,1);">
  
        <div style="text-align:left;"><strong>{{title}}</strong></div>
    <div class="row" >
        <div style="text-align:left;">
            {{description}}
        </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name:'ForumThread',
    props :['title','description','link'],
    methods:{
    resolveLink: function(){
        this.$router.push({path:this.link});
      }
    }
}
</script>
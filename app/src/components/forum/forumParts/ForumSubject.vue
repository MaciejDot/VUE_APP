<template>
<div style="padding:5%;cursor: pointer;"
v-on:click="resolveLink()"
>
  <div style="background-color:#f8f9fa!important;border-radius:10px;padding:10px;height:200px;">
  
        <strong>{{title}}</strong>
    <div class="row" >
        <div class="col-xl-3 col-md-4 col-2">
        <div style="width:50px;">
          <img class="d-flex mr-3 rounded-circle" src="@/assets/avatar.png" style="width:50px;height:50px;" alt>
          
          </div>
        </div>
        <div class="col-xl-9 col-md-8 col-10" style="text-align:left;">
            {{description}}
        </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name:'ForumSubject',
    props :['title','description','link'],
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
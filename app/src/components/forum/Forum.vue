<template>
<div>
    <div class="row">
    <div v-for="subject in subjects" :key="subject" class="col-md-4">
      <ForumSubject :link="subject.path" :title="subject.title" :description="subject.description" :thumbnail="subject.thumbnail"/>
    </div>
    </div>
    </div>
    </template>
<script>
import ForumSubject from './forumParts/ForumSubject.vue'
export default {
    name: 'Forum',
    data:function(){
      return {
        subjects:[]
      }
    },
    mounted: function(){
      this.$api.get('/ForumViewer/GetSubjects').then( r=>{
        this.subjects=r.data.subjects;
      });
    },
    components:{
      ForumSubject
    }
  }
</script>
<template>
<div>
    <div class="row">
    <div class="col-md-4">
      <ForumSubject link="/forum/gettingstarted" title="Getting Started" description="Threads for begginers in bodyweigth base training"/>
    </div>
    <div class="col-md-4">
      <ForumSubject link="/forum/flexibility" title="Flexibility" description="Threads dedicated to flexibility"/>
    </div>
    <div class="col-md-4">
      <ForumSubject link="/forum/strength" title="Strength" description="Threads dedicated to strength and strength moves"/>
    </div>
    </div>
    <div class="row">
    <div class="col-md-4">
      <ForumSubject title="Injury Prevension" description="How to stay injury free and what to do if you injure yourself"/>
    </div>
    <div class="col-md-4">
      <ForumSubject title="Dynamics" description="Threads regarding dynamic moves"/>
    </div>
    <div class="col-md-4">
      <ForumSubject title="Nutrition" description="About diet and nutrition"/>
    </div>
    </div>
    </div>
    </template>
<script>
import ForumSubject from './forumParts/ForumSubject.vue'
export default {
    name: 'Forum',
    components:{
      ForumSubject
    }
  }
</script>
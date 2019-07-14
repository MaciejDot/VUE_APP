<template>
<div>
    <strong>{{title}}</strong>
    <ForumThread :link="`/forum/${title}/cd-12`" title="How to achieve advanced tuck planche"/>
    <ForumThread :link="`/forum/${title}/clp-122`" title="Problem with dips"/>
    <ForumThread :link="`/forum/${title}/13332`" title="Triceps development"/>
</div>
</template>
<script>
import ForumThread from './forumParts/ForumThread.vue'
export default {
    name:'ForumThreadList',
    components:{
        ForumThread
    },
    data:function(){
        return {
            title:''
        }
    },
    mounted:function(){
        this.title = this.$route.params.title;
    }
}
</script>
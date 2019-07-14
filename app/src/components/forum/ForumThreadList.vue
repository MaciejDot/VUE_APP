<template>
<div>
    <strong>{{title}}</strong>
    <ForumThread title="How to achieve advanced tuck planche"/>
    <ForumThread title="Problem with dips"/>
    <ForumThread title="Triceps development"/>
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
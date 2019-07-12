<template>
<div>
    <strong>{{title}}</strong>
    <ForumThread/>
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
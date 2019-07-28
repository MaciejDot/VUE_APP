<template>
<div>
    <strong>{{title}}</strong>
    <ForumThread  v-for="thread in threads" :key="thread" :link="thread.path" :title="thread.title" :op="thread.op" :replies="thread.replies"/>
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
            title:'',
            threads:[]
        }
    },
    mounted:function(){
        this.title = this.$route.params.title;
        this.$api.get('/ForumViewer/GetThreads?subject='+this.title+'&page=0').then(
            r=>{
                this.threads = r.data.threads;
            }
        )
    }
}
</script>
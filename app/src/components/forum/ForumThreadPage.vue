<template>
<div>
    <h1>{{thread.title}}</h1>
    <ForumPost v-if="$route.query.page==1" :content="thread.content.split('\n')" :date="thread.created" :author="thread.author" />
    <ForumPost v-for="post in posts" :key="post.Id" :content="post.content.split('\n')" :date="post.date" :author="post.author" />
    <RichTextEditor />
</div>
</template>
<script>
import ForumPost from './forumParts/ForumPost'
import RichTextEditor from '@/components/richtexteditor/RichTextEditor.vue'
export default {
  data: ()=>{
    return {
      posts:[],
      thread:{}
    }
  },
  components: {
    ForumPost,
    RichTextEditor
  },
  mounted: function(){
    this.$api.get('/ForumViewer/GetPosts',{
      params:{
        subjectName:this.$route.params.subjectName,
        threadId:this.$route.params.threadId,
        page:this.$route.query.page
      }
    }).then(r=>{
      let partialPost = r.data.posts;
      this.posts=partialPost;
      this.thread =r.data.thread;
    })
  }
}
</script>

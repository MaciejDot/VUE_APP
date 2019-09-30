<template>
<div>
    <h1>{{thread.title}}</h1>
    <ForumPost v-if="$route.query.page==1" :content="thread.content" :date="thread.created" :author="thread.author" />
    <ForumPost v-for="post in posts" :key="post.Id" :content="post.content" :date="post.date" :author="post.author" />
<RichTextEditorComment :threadId="parseInt(this.$route.params.threadId)" ref="textEditor" />
</div>
</template>
<script>
import ForumPost from './forumParts/ForumPost'
import RichTextEditorComment from '@/components/richtexteditor/RichTextEditorComment'
export default {
  data: ()=>{
    return {
      posts:[],
      thread:{}
    }
  },
  components: {
    ForumPost,
    RichTextEditorComment,
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
<style>
iframe {
  border-radius:5px;
}
@media (max-width: 450px) and (min-width: 400px){
  iframe {
        width: 350px;
        height: 200px;
    }
}

@media (max-width:700px) and (min-width:451px) {
  iframe {
        width: 400px;
        height: 220px;
    }
}

@media (min-width:701px) {
  iframe {
        width: 640px;
        height: 360px;
    }
}
</style>

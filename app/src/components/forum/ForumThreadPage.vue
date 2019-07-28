<template>
<div>
    {{threadTitle}}
    <ForumPost v-for="post in posts" :key="post" :content="post.content" :date="post.date" :author="post.author" />
<RichTextEditorComment :threadId="this.$route.params.threadId" ref="textEditor" style="max-width:1000px;margin-left: auto;
    margin-right: auto;" />
</div>
</template>
<script>
import ForumPost from './forumParts/ForumPost'
import RichTextEditorComment from '@/components/richtexteditor/RichTextEditorComment'

export default {
  data: ()=>{
    return {
      posts:[],
      threadTitle:''
    }
  },
  components: {
    ForumPost,
    RichTextEditorComment
  },
  mounted: function(){
    this.$api.get(`/ForumViewer/GetPosts?threadId=${this.$route.params.threadId}&page=0`).then(r=>{
      this.posts=r.data.posts;
      this.threadTitle =r.data.threadTitle;
    })
  }
}
</script>
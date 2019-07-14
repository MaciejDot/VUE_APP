<template>
<div>
    Forum Threads
    <ForumPost/>
<ForumPost/>
<ForumPost/>
<ForumPost/>
<RichTextEditorComment/>
</div>
</template>
<script>
import ForumPost from './forumParts/ForumPost'
import RichTextEditorComment from '@/components/richtexteditor/RichTextEditorComment'

export default {
  components: {
    ForumPost,
    RichTextEditorComment
  },
}
</script>
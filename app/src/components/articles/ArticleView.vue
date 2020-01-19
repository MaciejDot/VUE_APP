<template>
  <div style="margin-left: auto; margin-right: auto;max-width:1000px">
    <ArticleViewer :title="title" :content="content.split('\n')" :date="date" :author="author" />
  </div>
</template>
<script>
import ArticleViewer from "./articleComponents/ArticleViewer.vue";
import getFormattedDate from "../../dateFormatter.js"
export default {
  components: { ArticleViewer },
  name: "ArticleView",
  data: function() {
    return {
      title: "",
      content: "",
      date: "",
      author: ""
    };
  },
  mounted: function() {
    this.$axios.article()
      .get(`/Article/1/${this.$route.params.id}`)
      .then(response => {
        this.title = response.data.title;
        this.date = getFormattedDate(response.data.created);
        this.content = response.data.content;
        this.author = response.data.author;
      });
  }
};
</script>
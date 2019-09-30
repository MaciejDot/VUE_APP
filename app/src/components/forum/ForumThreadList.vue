<template>
  <b-container>
    <h1>{{title}}</h1>
    <ForumThread
      v-for="thread in threads"
      :key="thread.id"
      :link="`/forum/${subjectName}/${thread.id}?page=1`"
      :title="thread.title"
      :op="thread.author"
      :replies="thread.replies"
      :created="thread.created"
      :last-activity="thread.lastActivity"
    />
    <b-row>
      <b-col></b-col>
      <b-col>All threads count : {{allThreadsCount}}</b-col>
    </b-row>
  </b-container>
</template>
<script>
import ForumThread from "./forumParts/ForumThread.vue";
import { BRow, BCol, BContainer } from "bootstrap-vue";
export default {
  components: { BRow, BCol, ForumThread, BContainer },
  name: "ForumThreadList",
  data: function() {
    return {
      subjectId: "",
      threads: [],
      allThreadsCount: 0,
      title: ""
    };
  },
  mounted: function() {
    this.subjectName = this.$route.params.subjectName;
    this.$api
      .get("/ForumViewer/GetThreads", {
        params: {
          subjectName: this.subjectName,
          page: this.$route.query.page
        }
      })
      .then(r => {
        (this.title = r.data.title), (this.threads = r.data.threads);
        this.allThreadsCount = r.data.allThreadsCount;
      });
  }
};
</script>
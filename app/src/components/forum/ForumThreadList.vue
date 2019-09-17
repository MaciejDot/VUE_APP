<template>
  <div>
    <h1>{{title}}</h1>
    <ForumThread
      v-for="thread in threads"
      :key="thread.id"
      :link="`/forum/${subjectId}/${thread.id}`"
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
  </div>
</template>
<script>
import ForumThread from "./forumParts/ForumThread.vue";
import { BRow, BCol } from "bootstrap-vue";
export default {
  components: { BRow, BCol, ForumThread },
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
    this.subjectId = this.$route.params.subjectId;
    this.$api
      .get("/ForumViewer/GetThreads", {
        params: {
          subjectId: this.subjectId,
          page: 0
        }
      })
      .then(r => {
        (this.title = r.data.title), (this.threads = r.data.threads);
        this.allThreadsCount = r.data.allThreadsCount;
      });
  }
};
</script>
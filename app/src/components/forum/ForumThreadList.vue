<template>
  <div class="background-page">
    <b-container>
      <h1>{{title}}</h1>
      <ForumAddThread v-if="loged()" :link="`/create-thread/${subjectName}`" />
      <b-container>
        <b-pagination-nav
          v-if="numberOfPages>1"
          v-model="pageNum"
          class="pagination-custom"
          :link-gen="linkGen"
          :number-of-pages="numberOfPages"
          use-router
          align="fill"
        ></b-pagination-nav>
      </b-container>
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
      <b-container>
        <b-pagination-nav
          v-if="numberOfPages>1"
          v-model="pageNum"
          class="pagination-custom"
          :link-gen="linkGen"
          :number-of-pages="numberOfPages"
          use-router
          align="fill"
        ></b-pagination-nav>
      </b-container>
      <b-row>
        <b-col />
        <b-col>All threads count : {{allThreadsCount}}</b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import ForumThread from "./forumParts/ForumThread.vue";
import ForumAddThread from "./forumParts/ForumAddThread.vue";
import { BRow, BCol, BContainer, BPaginationNav } from "bootstrap-vue";
export default {
  components: {
    BRow,
    BCol,
    ForumThread,
    BContainer,
    ForumAddThread,
    BPaginationNav
  },
  name: "ForumThreadList",
  props: {page:{}, subjectName:{}},
  data: function() {
    return {
      subjectId: "",
      threads: [],
      allThreadsCount: 0,
      title: "",
      numberOfPages: 1
    };
  },
  methods: {
    loged: function() {
      return !(localStorage["token"] == undefined);
    },
    linkGen(pageNum) {
      return `/Forum/${this.subjectName}?page=${pageNum}`;
    }
  },
  watch: {
    "page": function() {
      if (this.pageNum != this.page) {
        this.pageNum = this.page;
        this.$axios
          .forum()
          .get(`/Thread/${this.subjectName}/${this.page}`)
          .then(r => {
            (this.title = r.data.title), (this.threads = r.data.threads);
            this.allThreadsCount = r.data.allThreadsCount;
            this.numberOfPages =
              Math.ceil(r.data.allThreadsCount / 20) > 1
                ? Math.ceil(r.data.allThreadsCount / 20)
                : 1;
          })
          .catch(e => {
            if (e.response.status == 404) {
              this.$router.push({ path: "/404" });
            }
          });
      }
    }
  },
  mounted: function() {
    this.$axios
      .forum()
      .get(`/Thread/${this.subjectName}/${this.page === undefined ? 1 : this.page }`)
      .then(r => {
        (this.title = r.data.title), (this.threads = r.data.threads);
        this.allThreadsCount = r.data.allThreadsCount;
        this.numberOfPages =
          Math.ceil(r.data.allThreadsCount / 20) > 1
            ? Math.ceil(r.data.allThreadsCount / 20)
            : 1;
      })
      .catch(e => {
        if (e.response.status == 404) {
          this.$router.push({ path: "/404" });
        }
      });
  }
};
</script>
<style>
.pagination-custom ul {
  box-shadow: 2px 2px 5px 0px rgba(120, 111, 120, 1);
  margin-top: 10px;
  margin-bottom: 10px;
}
.pagination-custom a {
  color: black;
}
</style>
<template>
  <div class="background-page">
    <h1>{{thread.title}}</h1>
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
    <ForumPost
      v-if="page==1"
      :content="thread.content.split('\n')"
      :date="thread.created"
      :author="thread.author"
    />
    <ForumPost
      v-for="post in posts"
      :key="post.Id"
      :content="post.content.split('\n')"
      :date="post.created"
      :author="post.author"
      :edited="post.edited"
    />
    <RichTextEditor v-if="pageNum==numberOfPages" ref="editor" :post="post" :error="error" />
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
  </div>
</template>
<script>
import ForumPost from "./forumParts/ForumPost";
import RichTextEditor from "@/components/richtexteditor/RichTextEditor.vue";
import { BContainer, BPaginationNav } from "bootstrap-vue";
export default {
  data: () => {
    return {
      posts: [],
      thread: {},
      numberOfPages: 0,
      pageNum: -1,
      error: null
    };
  },
  components: {
    ForumPost,
    RichTextEditor,
    BContainer,
    BPaginationNav
  },
  props:{threadId: {}, subjectName: {} ,page:{}},
  methods: {
    post: function() {
      var self = this;
      this.$axios
        .forum()
        .post("/Post", {
          ThreadId: parseInt(this.threadId),
          Content: self.$refs.editor.content
        })
        .then(() => {
          this.$axios
            .forum()
            .get(`/Post/${this.subjectName}/${this.threadId}/${this.page===undefined?1:this.page}`)
            .then(r => {
              let partialPost = r.data.posts;
              this.posts = partialPost;
              this.thread = r.data.thread;
              this.numberOfPages = Math.ceil((r.data.allPostsCount + 1) / 20);
            });
        })
        .catch(() => (this.error = "Something went wrong"));
    },
    linkGen(pageNum) {
      return `/Forum/${this.subjectName}/${this.$route.params.threadId}?page=${pageNum}`;
    }
  },
  watch: {
    "page": function() {
      if (this.pageNum != this.page) {
        this.pageNum = this.page === undefined ? 1 : this.page;
        this.$axios
          .forum()
          .get(`/Post/${this.subjectName}/${this.threadId}/${this.page===undefined?1:this.page}`)
          .then(r => {
            let partialPost = r.data.posts;
            this.posts = partialPost;
            this.thread = r.data.thread;
            this.numberOfPages = Math.ceil((r.data.allPostsCount + 1) / 20);
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
    this.pageNum = this.page === undefined ? 1 : this.page;
    this.$axios
      .forum()
      .get(`/Post/${this.subjectName}/${this.threadId}/${this.page===undefined? 1: this.page}`)
      .then(r => {
        let partialPost = r.data.posts;
        this.posts = partialPost;
        this.thread = r.data.thread;
        this.numberOfPages = Math.ceil((r.data.allPostsCount + 1) / 20);
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

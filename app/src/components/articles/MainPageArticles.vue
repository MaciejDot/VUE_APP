<template>
  <div class="background-page">
    <div
      style="/*position: absolute;*/ top: 0px; left: 0px; width: 100%; height: 100%; /*overflow: hidden;*/ pointer-events: none; z-index: -100;"
    >
      <h1>Articles</h1>
    </div>
    <ArticleThumbnail
      v-if="$store.dispatch('userIsInRole','admin') && pageNum==1"
      title="Create a new article"
      :to="0"
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
    <ArticleThumbnail
      v-for="article in articles"
      :author="article.author"
      :key="article"
      :imagePath="`${$baseUrlArticleApi}/ArticleThumbnail/${article.thumbnailId}`"
      :title="article.title"
      :shortDescription="article.description"
      :date="article.created"
      :to="article.id"
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
  </div>
</template>
<script>
import { BContainer, BPaginationNav } from "bootstrap-vue";
import ArticleThumbnail from "./articleComponents/ArticleThumbnail.vue";
export default {
  name: "MainPageArticles",
  data: function() {
    return {
      pageNum:
        this.$route.params.page == undefined ? 1 : this.$route.params.page,
      numberOfPages: 1,
      articles: []
    };
  },
  //computed: mapActions() ???????????
  mounted: function() {
    this.$axios.article()
      .get(`/Article/${this.$route.params.page == undefined ? 1 : this.$route.params.page}`)
      .then(response => {
        this.articles = response.data.articles;
        this.numberOfPages = response.data.allArticlesCount / 20;
      });
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? "" : `/articles/${pageNum}`;
    }
  },
  components: {
    ArticleThumbnail,
    BPaginationNav,
    BContainer
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
<template>
  <div>
    <div
      style="/*position: absolute;*/ top: 0px; left: 0px; width: 100%; height: 100%; /*overflow: hidden;*/ pointer-events: none; z-index: -100;"
    >
      <h1>Articles</h1>
    </div>
    <b-container>
      <b-pagination-nav
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
      :imagePath="`${$baseUrlApi}/ArticleViewer/GetThumbnailPicture?thumbnailId=${article.thumbnailId}`"
      :title="article.title"
      :shortDescription="article.description"
      :date="article.created"
      :to="article.id"
    />
    <b-container>
      <b-pagination-nav
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
      numberOfPages: 1,
      articles: []
    };
  },
  mounted: function() {
    this.$api
      .get("/ArticleViewer/GetArticlesThumbnails", {
        params: {
          page:
            this.$route.params.page == undefined ? 1 : this.$route.params.page
        }
      })
      .then(response => {
        this.articles = response.data.articles;
        this.numberOfPages = response.data.allArticlesCount / 20;
      });
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? "" : `/${pageNum}`;
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
.pagination-custom ul{
  box-shadow: 2px 2px 5px 0px rgba(120, 111, 120, 1);
  margin-top: 10px;
  margin-bottom: 10px;
}
.pagination-custom a {
  color: black;
}
</style>
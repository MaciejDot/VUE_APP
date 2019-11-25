<template>
  <div id="wiki">
    <div style="height:20px" />
    <b-container v-if="this.$account.isInRole('admin')">
      <wiki-add-article link="/create-wiki"/>
    </b-container>
    <b-container>
      <div @keyup.enter="submit" style="justify-content: center">
        <b-row>
          <b-col cols="8">
            <b-form-input style="height: 38px;" v-model="phrase" size="sm" placeholder="Search thru wiki" />
          </b-col>
          <b-col cols="4">
            <b-button style="width:-webkit-fill-available;" type="primary" @click="submit">search</b-button>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <b-container v-if="articles.length>0">
      <WikiSearch
        v-for="article in articles"
        :key="article.name"
        :name="article.name"
        :created="article.created"
      />
    </b-container>
  </div>
</template>
<script>
import { BContainer, BButton, BFormInput, BCol, BRow } from "bootstrap-vue";
import WikiSearch from "./wikiComponents/WikiSearch.vue";
import WikiAddArticle from './wikiComponents/WikiAddArticle.vue'
export default {
  name: "MainPageWiki",
  data: function() {
    return {
      phrase:
        this.$route.query.phrase == undefined ? "" : this.$route.query.phrase,
      page: this.$route.query.page == undefined ? 1 : this.$route.query.page,
      articles: []
    };
  },
  mounted: function() {
    if (this.$route.query.phrase != undefined) {
      this.search();
    }
  },
  components: {
    BCol,
    WikiAddArticle,
    BRow,
    BContainer,
    BButton,
    BFormInput,
    WikiSearch
  },
  methods: {
    submit: function() {
      this.search();
      this.$router.push({
        path: "/wiki",
        query: { phrase: this.phrase, page: this.page }
      });
    },
    search: function() {
      this.$axios
        .api()
        .get("/Search/Wiki", {
          params: { phrase: this.phrase, page: this.page }
        })
        .then(t => {
          this.articles = t.data.articles;
        });
    }
  }
};
</script>
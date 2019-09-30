<template>
  <b-container id="wikiArticle">
    <h1>{{title}}</h1>
    <b-row>
      <b-col cols="12" v-for="section in sections" :key="section.title">
        <h2>{{section.title}}</h2>
        <div v-html="section.content" />
        <!--div table of contentif index == 0 -->
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { BRow, BContainer, BCol } from "bootstrap-vue"; 
export default {
  name: "WikiArticle",
  components: { BRow, BContainer, BCol },
  data: function() {
    return {
      title: "",
      sections: [],
      sectionsMap: []
    };
  },
  mounted: function() {
    this.$api
      .get("/WikiViewer/GetWikiArticle", {
        params: {
          name: this.$route.params.exercise
        }
      })
      .then(response => {
        this.title = response.data.article.name;
        this.sections = response.data.article.sections;
        this.sectionsMap = this.sections.map(el => el.title);
      });
  }
};
</script>
<template>
  <b-container id="wikiArticle">
    <h1>{{title}}</h1>
    <b-card>
      <b-row>
        <b-col cols="12" v-for="section in sectionsMap" :key="section">
          <a
            href="#"
            v-scroll-to="{
          el: `#${section.replace(/ /g,'-')}`,
          duration: 500,
          easing: 'linear',
          offset: -200,
          force: true,
          cancelable: true,
          x: false,
          y: true
        }"
          >{{section}}</a>
        </b-col>
      </b-row>
    </b-card>
    <b-row>
      <b-col cols="12" v-for="section in sections" :key="section.title">
        <h2 :id="section.title.replace(/ /g,'-')">{{section.title}}</h2>
        <div v-html="section.content" />
        <!--div table of contentif index == 0 -->
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { BRow, BContainer, BCol, BCard } from "bootstrap-vue";
export default {
  name: "WikiArticle",
  components: { BRow, BContainer, BCol, BCard },
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
<template>
  <b-container>
    <h1 style="margin-left: auto; margin-right: auto;text-align:center;">{{title}}</h1>
    <div v-for="(line,index) in content" :key="index">
      <div style="text-align:center;" v-html="line" />
    </div>
    <b-row>
      <b-col>{{author}}</b-col>
      <b-col>{{date}}</b-col>
    </b-row>
  </b-container>
</template>
<script>
import { BRow, BContainer, BCol } from "bootstrap-vue";
export default {
  name: "ArticleViewer",
  props: ["author", "title", "content", "date"],
  components: { BRow, BContainer, BCol }
};
</script>
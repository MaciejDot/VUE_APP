<template>
  <b-card
    v-on:click="resolveLink()"
    style="padding: 10px;cursor: pointer;background-color:#f8f9fa!important;border-radius:10px;box-shadow: 2px 2px 5px 0px rgba(120,111,120,1);margin:10px;"
  >
    <img
      class="thumbnail-image"
      :style='`background-image: url(`+thumbnail+`);`'
    />
    <h2 class="article-title">{{title}}</h2>
    <div>{{description}}</div>
    <b-row>
      <b-col>Post Count: {{postCount}}</b-col>
      <b-col>Last Activity: {{lastActivity}}</b-col>
    </b-row>
  </b-card>
</template>
<script>
import { BRow, BCol, BCard } from "bootstrap-vue";
export default {
  name: "ForumSubject",
  components: { BRow, BCol, BCard },
  props: [
    "title",
    "description",
    "link",
    "thumbnail",
    "lastActivity",
    "postCount"
  ],
  data: function() {
    return {
      goToLocation: ""
    };
  },
  methods: {
    resolveLink: function() {
      this.$router.push({ path: this.link });
    }
  }
};
</script>
<style scoped>
.article-title {
  color: black;
  font-family: Georgia, serif;
}
.thumbnail-image {
  background-position: 0% 50%;
  background-size: 100%;
  background-repeat: no-repeat;
  visibility: visible;
  border-radius: 10px;
  width: -webkit-fill-available;
  margin: 0;
  border-radius:10px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 62.5%;
}
</style>
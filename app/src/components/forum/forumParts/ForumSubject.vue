<template>
  <b-card
    v-on:click="resolveLink()"
    style="padding: 10px;cursor: pointer;border-radius: 3px;
    border: 1px solid #e7e7e7;margin:10px;color:black"
  >
    <img
      class="thumbnail-image"
      loading='lazy'
      :style='`background-image: url(`+thumbnail+`);`'
    />
    <h2 class="article-title">{{title}}</h2>
    <div>{{description}}</div>
    <b-row>
      <b-col>Post Count: {{postCount}}</b-col>
      <b-col>Last Activity: {{activity}}</b-col>
    </b-row>
  </b-card>
</template>
<script>
import { BRow, BCol, BCard } from "bootstrap-vue";
import {getFormattedDate} from "../../../library/dateFormatter.js"
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
      goToLocation: "",
      activity: getFormattedDate(this.lastActivity)
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
  font-family: Georgia, serif;
}
.thumbnail-image {
  background-position: 0% 50%;
  background-size: 100%;
  background-repeat: no-repeat;
  visibility: visible;
  width: -webkit-fill-available;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  padding-top: 62.5%;
}
</style>
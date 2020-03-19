<template>
  <div style="padding:5px;margin-bottom:30px">
    <b-card
      style="border-radius: 3px;
    border: 1px solid #e7e7e7;padding:10px;min-height:500px;margin-left: auto;
    margin-right: auto;max-width:1000px; text-align:auto;"
    >
      <b-media style="position:relative;min-height:500px;">
        <div style="text-align:center;float:left;display:inline;height:30px; margin-top:6px">
          {{author}}
          <div v-if="edited!=null">edited on {{editedDate}}</div>
        </div>

        <svg
          viewBox="0 0 90 90"
          class="edit-post"
        >
          <path
            d="m 13 45 a 1 1 0 0 0 15 0 a 1 1 0 0 0 -15 0 z m 25 0 a 1 1 0 0 0 15 0 a 1 1 0 0 0 -15 0 z m 25 0 a 1 1 0 0 0 15 0 a 1 1 0 0 0 -15 0 z "
          />
        </svg>
        <div style="margin-top:36px" />
        <div v-for="(contentLine,index) in content" :key="index">
          <div class="row" v-html="contentLine" />
        </div>
        <div
          style="text-align:right; border-top-style: solid; border-top-width: thin;position:absolute;width:100%;bottom: 5px;"
        >{{created}}</div>
      </b-media>
    </b-card>
  </div>
</template>
<script>
import { BCard, BMedia } from "bootstrap-vue";
import {getFormattedDate} from "../../../library/dateFormatter.js";
export default {
  name: "ForumPost",
  props: ["title", "content", "author", "date", "edited"],
  components: { BCard, BMedia },
  data: function(){
    return{
      created: getFormattedDate(this.date),
      editedDate : this.edited == null ? null : getFormattedDate(this.edited)
    }
  }
};
</script>
<style scoped>
.edit-post {
  max-width: 30px;
  float: right;
  opacity: 0.5;
  cursor: pointer;
}
.edit-post:hover {
  opacity: 0.7;
}
</style>
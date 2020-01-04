<template>
  <div style="padding:5px;margin-bottom:10px" v-on:click="resolveLink()">
    <b-card
      style="border-radius: 3px;
    border: 1px solid #e7e7e7;padding:5px;min-height:100px;cursor:pointer;"
    >
      <div style="text-align:left;">
        <strong>Add new thread</strong>
      </div>
    </b-card>
  </div>
</template>
<script>
import { BCard } from "bootstrap-vue";
export default {
  name: "ForumAddThread",
  props: ["link"],
  components: {
    BCard
  },
  methods: {
    resolveLink: function() {
      this.$router.push({ path: this.link });
    }
  }
};
</script>
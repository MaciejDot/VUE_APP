<template>
<div class="background-page">
  <b-container>
    <b-row>
      <b-col lg="6" md="12" v-for="subject in subjects" :key="subject.path">
        <ForumSubject
          :link="'/Forum/'+subject.title+'?page=1'"
          :title="subject.title"
          :description="subject.description"
          :thumbnail="`${$baseUrlApi}/SubjectThumbnail/${subject.thumbnailId}`"
          :lastActivity="subject.lastActivity"
          :postCount="subject.postCount"
        />
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>
<script>
import ForumSubject from "./forumParts/ForumSubject.vue";
import { BContainer } from "bootstrap-vue";
export default {
  name: "Forum",
  data: function() {
    return {
      subjects: []
    };
  },
  mounted: function() {
    this.$axios.api().get("/Subject").then(r => {
      this.subjects = r.data.subjects;
    });
  },
  components: {
    ForumSubject,
    BContainer
  }
};
</script>
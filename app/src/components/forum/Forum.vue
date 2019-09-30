<template>
  <b-container>
    <b-row>
      <b-col lg="6" md="12" v-for="subject in subjects" :key="subject.path">
        <ForumSubject
          :link="'/Forum/'+subject.title+'?page=1'"
          :title="subject.title"
          :description="subject.description"
          :thumbnail="`${$baseUrlApi}/ForumViewer/GetThumbnailPicture?thumbnailId=${subject.thumbnailId}`"
          :lastActivity="subject.lastActivity"
          :postCount="subject.postCount"
        />
      </b-col>
    </b-row>
  </b-container>
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
    this.$api.get("/ForumViewer/GetSubjects").then(r => {
      this.subjects = r.data.subjects;
    });
  },
  components: {
    ForumSubject,
    BContainer
  }
};
</script>
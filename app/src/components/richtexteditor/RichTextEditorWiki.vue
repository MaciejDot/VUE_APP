<template>
  <div>
    <b-container style="max-width:1000px">
      <div style="height:30px" />
      <h1 v-if="!showVisual">Create a new Exercise</h1>
      <h1 v-else>{{title}}</h1>
      <b-form-input v-if="!showVisual" v-model="title" placeholder="Enter Exercise Name..." size="lg"></b-form-input>
      <div style="height:30px" />
      <div v-for="(section, index) in sections" :key="index">
        <b-row>
          <b-col cols="11">
            <div v-if="!showVisual" id="editor_content">
              <b-form-input v-model="section.title" placeholder="Enter Section title" size="lg" />
              <editor :ref="`editor${index}`" v-model="section.content" />
            </div>
            <div v-else style="text-align:left;" id="editor_compiled">
              <h2>{{section.title}}</h2>
              <div v-for="(content,index) in section.compiledContent" :key="index">
                <div v-html="content" />
              </div>
            </div>
          </b-col>
          <b-col cols="1">
            <b-button @click="removeSection(index)">remove this section</b-button>
          </b-col>
        </b-row>
      </div>
      <b-button @click="toggleVisual">Toggle Visual</b-button>
      <b-button @click="addSection">Add Section</b-button>
      <b-button @click="post">Post</b-button>
    </b-container>
    <b-modal ref="are-sure-modal" hide-footer title="Are you sure you want post this wiki article?">
      <b-row>
        <b-col>
          <b-button pill variant="danger" @click="hideModal()">No. I'm still working on it.</b-button>
        </b-col>
        <b-col />
        <b-col>
          <b-button pill variant="primary" @click="submit()">Yes, i am sure. I want to post it.</b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>
<script>
import {
  BContainer,
  BButton,
  BFormInput,
  BModal,
  BRow,
  BCol
} from "bootstrap-vue";
import Editor from "./customEditorBase/Editor.vue";
import compile from "../../library/compileToHtml"
export default {
  name: "RichTextEditorWiki",
  data: function() {
    return {
      showVisual: false,
      title: "",
      description: "",
      file: null,
      sectionTitle: [],
      sections: [],
      thumbnailSrc: "",
      error: ""
    };
  },
  components: {
    Editor,
    BContainer,
    BButton,
    BFormInput,
    BModal,
    BRow,
    BCol
  },
  methods: {
    addSection: function() {
      this.sections.push({
        title: "",
        content: "",
        compiledContent: [""]
      });
    },
    post: function(){
      if(this.title!=''&& this.sections.length!=0 && this.sections.every(x=> x.title!=""&&x.content!='')){
        this.$refs['are-sure-modal'].show();
      }
    },
    hideModal: function(){
      this.$refs['are-sure-modal'].hide();
    },
    submit: function(){
      this.$axios.api().post('/WikiExercise',{
        Name:this.title,
        Sections:this.sections.map(x => {return {Name:x.title,Content:x.content}})
      }).then(r=>this.$router.push({ path: `wiki/${r.data}` }))
    },
    removeSection: function(index) {
      this.sections.splice(index, 1);
    },
    toggleVisual: function() {
      if (!this.showVisual) {
        for (let index = 0; index < this.sections.length; index+=1) {
          this.sections[index].compiledContent = compile.compileToHtml(this.sections[index].content)
        }
      }
      this.showVisual = !this.showVisual;
    }
  }
};
</script>
<style scoped>
.red {
  color: red;
}
</style>
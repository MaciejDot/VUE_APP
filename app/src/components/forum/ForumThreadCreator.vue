<template>
  <div style="padding: 5px;">
    <div
      style="background-color:#f8f9fa!important;border-radius:10px;padding:10px;min-height:600px;max-width:1000px;margin-left: auto; margin-right: auto;"
    >
      <div style="padding: 5px;">
        <h1>{{$route.params.subjectName}}</h1>
        <div>
          <strong>Title</strong>
        </div>
        <div
          style="background-color:#f8f9fa!important;border-radius:10px;padding:10px;min-height:50px;"
        >
          <input
            type="text"
            maxlength="200"
            v-model="title"
            style="background-color:white; min-height:40px; width:100%;border-radius:10px; text-align:left;font-size: 1.2rem;font-weight: 400;line-height: 2;font-weight: bold;"
          />
        </div>
      </div>
      <div>
        <strong>Description</strong>
      </div>
      <div
        style="background-color:#f8f9fa!important;border-radius:10px;padding:10px;min-height:50px;"
      >
      <div v-if="!showVisual">
        <editor ref="editor" v-model="content" style="background-color:white; min-height:40px; width:100%;border-radius:10px; text-align:left;"/>
      </div>
      <div v-else style="text-align:left;" id="editor_compiled">
        <div v-for="(content,index) in compiledContent" :key="index">
          <div v-html="content" />
        </div>
      </div>
      <b-button pill @click="toggleVisual()">Toggle Visual</b-button>
      <div class="separator" />
      <div>
        <b-button pill variant="primary" @click="post()">Create Thread</b-button>
      </div>
      <div class="separator" />
      <div class="error" v-if="error!=null">{{error}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Editor from "@/components/richtexteditor/customEditorBase/Editor";
export default {
  name: "ForumThreadCreator",
  components: {
    Editor
  },
  data: function(){
    return{
      showVisual:false,
      content:'',
      compiledContent:[],
      title:''
    }
  },
  methods: {
    post: function() {
      this.$axios.api().post(
        '/ForumWriter/CreateThread',
        {
          SubjectName:this.$route.params.subjectName,
          Content:this.content,
          Title:this.title
        }
      ).then(r=>
        this.$router.push({ path: `/Forum/${r.data.thread.subjectName}/${r.data.thread.threadId}?page=1` })
      )
    },
    toggleVisual: function() {
      if (!this.showVisual) {
        this.compiledContent = this.$refs.editor.compileToHtml();
      }
      this.showVisual = !this.showVisual;
    }
  }
};
</script>
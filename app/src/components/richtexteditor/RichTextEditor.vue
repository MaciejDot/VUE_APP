<template>
<div style="padding: 5px;">
    <b-card
      class="card-editor"
    >
    <div>
        <div id="editor_menu">
        </div>
        <div v-if="!showVisual" id="editor_content">
            <editor ref="editor" v-model="content"/>
        </div>
        <div v-else id="editor_compiled">
            <div v-for="(content,index) in compiledContent" :key="index">
            <div v-html="content"/>
            </div>
        </div>
        <b-button pill @click="toggleVisual()">Toggle Visual</b-button>
        <div>
            <b-button pill variant="primary">Post Answear</b-button>
        </div>
       </div>
    </b-card>
  </div>
</template>
<script>
import Editor from './customEditorBase/Editor.vue'
import { BButton, BCard } from 'bootstrap-vue'
export default {
    name: 'RichTextEditor',
    components: {
        BButton, BCard, Editor
    },
    data: function(){
        return {
            content:'j',
            compiledContent:[],
            showVisual:false
        }
    },
    methods:{
        toggleVisual: function(){
            if(!this.showVisual){
                this.compiledContent = this.$refs.editor.compileToHtml();
            }
            this.showVisual = !this.showVisual;
        }
    }
}
</script>
<style scoped>
.card-editor{background-color:#f8f9fa!important;border-radius:10px;padding:10px;box-shadow: 2px 2px 5px 0px rgba(120,111,120,1);margin-left: auto;
    margin-right: auto;max-width:1000px;max-height:60%;}
</style>

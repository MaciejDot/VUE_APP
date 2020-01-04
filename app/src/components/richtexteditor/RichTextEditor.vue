<template>
<div style="padding: 5px;">
    <b-card
      :class="cardStyle ? 'card-editor' : ''"
    >
    <div>
        <div id="editor_menu">
        </div>
        <div v-if="!showVisual" id="editor_content">
            <editor ref="editor" v-model="content"/>
        </div>
        <div v-else style="text-align:left;" id="editor_compiled">
            <div v-for="(content,index) in compiledContent" :key="index">
            <div v-html="content"/>
            </div>
        </div>
        <b-button pill @click="toggleVisual()">Toggle Visual</b-button>
        <div class="separator" />
        <div>
            <b-button pill variant="primary" @click="post()">{{postButtonName}}</b-button>
        </div>
        <div class="separator" />
        <div class="error" v-if="error!=null">
            {{error}}
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
    props:{'post':{default:null},'error':{default:null},'postButtonName':{ default:"Post Answear"} ,'cardStyle':{default:true}},
    components: {
        BButton, BCard, Editor
    },
    data: function(){
        return {
            content:'',
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
.error{
    color:tomato;
}
.separator{
    height:10px;
}
.card-editor{border-radius: 3px;
    border: 1px solid #e7e7e7;padding:10px;box-shadow: 2px 2px 5px 0px rgba(120,111,120,1);margin-left: auto;
    margin-right: auto;max-width:1000px;max-height:60%;}
</style>

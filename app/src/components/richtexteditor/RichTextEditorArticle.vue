<template>
<div>
    <b-container style="max-width:1000px">
        <div style="height:30px" />
        <h1>Create new article</h1>
        <b-form-input v-model="title" placeholder="Enter Title..." size="lg"></b-form-input>
        <div style="height:30px" />
        <b-form-input v-model="description" placeholder="Enter Short Description..."></b-form-input>
        <div style="height:30px" />
        <div v-if="!showVisual">
        <editor ref="editor" v-model="content" />
        </div>
        <div v-else>
            <div v-for="(content,index) in visableContent" :key="index">
            <div v-html="content"/>
            </div>
        </div>
        <b-button pill @click="toggleVisual()">Toggle Visual</b-button>
        <div style="height:30px" />
        <b-form-file
            v-model="file"
            accept=".png"
            :state="Boolean(file)"
            placeholder="Choose a png image for thumbnail"
            drop-placeholder="Drop png image here..."
        />
        <div style="height:30px" />
        <b-container>
            <div class="red" v-if="error!=''">{{error}}</div>
            <b-row style="margin-left:auto;margin-right:auto;max-width: 500px;">
                <b-button block pill variant="primary" @click="submitArticle()" :disabled="!articleIsValid()">Create</b-button>
            </b-row>
        </b-container>
    </b-container>
    <b-modal ref="are-sure-modal" hide-footer title="Are you sure you want post this article?">
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
import {BContainer , BButton,  BFormInput, BFormFile, BModal, BRow, BCol} from 'bootstrap-vue'
import Editor from './customEditorBase/Editor.vue'
export default {
    name:"RichTextEditorArticle",
    data: function(){
        return {
            showVisual:false,
            title : '',
            description : '',
            file : null,
            content:'',
            thumbnailSrc:'',
            visableContent:[],
            error:''
        }
    },
    components:{
        Editor,
        BContainer , BButton, BFormInput, BFormFile, BModal, BRow, BCol
    },
    methods:{
        hideModal: function(){
            this.$refs['are-sure-modal'].hide();
        },
        submit: function(){
            this.$refs['are-sure-modal'].hide();
            let formData = new FormData();
                formData.append('Content', this.content);
                formData.append('Description', this.description);
                formData.append('Title', this.title);
                formData.append('file', this.file)
                this.$axios.article().post('/Article',
                    formData
                ).then(response =>
                    this.$router.push({ path: `/article/${response.data.article.articleId}`})
                ).catch(()=>{
                    this.error ="Something went wrong...";
                })
        },
        articleIsValid: function(){
            return ( this.file != null && this.title != '' && this.description != '' && (this.content!='' ));
        },
        submitArticle: function(){
            if(this.articleIsValid()){
                this.$refs['are-sure-modal'].show();
            }
        },
        toggleVisual: function(){
            if(!this.showVisual){
                this.visableContent = this.$refs.editor.compileToHtml();
            }
            this.showVisual = !this.showVisual;
        }

    }
}
</script>
<style scoped>
.red{
    color:red;
}
</style>

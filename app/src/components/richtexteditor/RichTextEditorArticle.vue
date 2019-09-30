<template>
<div>
    <b-container style="max-width:1000px">
        <div style="height:30px" />
        <h1>Create new article</h1>
        <b-form-input v-model="title" placeholder="Enter Title..." size="lg"></b-form-input>
        <div style="height:30px" />
        <b-form-input v-model="description" placeholder="Enter Short Description..."></b-form-input>
        <div style="height:30px" />
        <textarea name="content" id="content" placeholder="Type article here!" />
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
            <b-row style="margin-left:auto;margin-right:auto;max-width: 500px;">
                <b-button block pill variant="primary" @click="submitArticle()" :disabled="!articleIsValid()">Create</b-button>
            </b-row>
        </b-container>
    </b-container>
    <b-modal ref="are-sure-modal" hide-footer title="Are you sure you want post this article?">
        <b-row>
            <b-img center :src="thumbnailSrc" />
        </b-row>
        <b-row>
            <b-container>
            <h1 style="margin-left: auto; margin-right: auto;text-align:center;">
            {{title}}
            </h1>
            </b-container>
        </b-row>
        <b-row>
            <div v-html="content" style="margin-left: auto; margin-right: auto ;" />
        </b-row>
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
import {BContainer , BButton, BCard, BFormInput, BFormFile, BModal, BRow, BCol, BImg } from 'bootstrap-vue'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
export default {
    name:"RichTextEditorArticle",
    data: function(){
        return {
            title : '',
            description : '',
            file : null,
            editor : null,
            content:'',
            thumbnailSrc:'',
        }
    },
    components:[
        BContainer , BButton, BCard, BFormInput, BFormFile, BModal, BRow, BCol, BImg
    ],
    mounted:function(){
        ClassicEditor
        .create( document.querySelector( '#content' ) ,{
            mediaEmbed: {
                extraProviders : ['instagram', 'twitter', 'googleMaps', 'flickr', 'facebook']
            }
        })
        .then( newEditor => {
            this.editor = newEditor;
        } )
    },
    methods:{
        hideModal: function(){
            this.$refs['are-sure-modal'].hide();
        },
        submit: function(){
            this.$refs['are-sure-modal'].hide();
            let formData = new FormData();
                formData.append('Content', this.editor.getData());
                formData.append('Description', this.description);
                formData.append('Title', this.title);
                formData.append('file', this.file)
                this.$api.post('/ArticleCreator/CreateArticle',
                    formData
                ).then(response =>
                    {alert(response.articleId)}
                )
        },
        articleIsValid: function(){
            return ( this.file != null && this.title != '' && this.description != '' && ( this.editor!=null ));
        },
        submitArticle: function(){
            if(this.articleIsValid() && this.editor.getData().length > 0){
                this.$refs['are-sure-modal'].show();
                this.content = this.editor.getData();
            }
        }
    }
}
</script>

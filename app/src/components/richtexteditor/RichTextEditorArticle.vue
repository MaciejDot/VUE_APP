<template>
    <b-container style="max-width:1000px">
        <div style="height:30px" />
        <h1>Create new article</h1>
        <b-form-input v-model="title" placeholder="Enter Title..."></b-form-input>
        <div style="height:30px" />
        <b-form-input v-model="description" placeholder="Enter Short Description..."></b-form-input>
        <div style="height:30px" />
        <textarea v-model="content" name="content" id="content" placeholder="Type article here!" />
        <div style="height:30px" />
        <b-form-file
            v-model="file"
            accept=".png"
            :state="Boolean(file)"
            placeholder="Choose a png image for thumbnail"
            drop-placeholder="Drop png image here..."
        />
        <div style="height:30px" />
        <div>
            {{content}}
        </div>
        <b-button pill variant="primary" @click="getDataFromEditor()">Create</b-button>
    </b-container>
</template>
<script>
import {BContainer , BButton, BCard, BFormInput, BFormFile} from 'bootstrap-vue'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

export default {
    name:"RichTextEditorArticle",
    data: function(){
        return {
            title : '',
            description : '',
            content : '',
            file : null,
            editor : null
        }
    },
    components:[
        BContainer , BButton, BCard, BFormInput, BFormFile
    ],
    mounted:function(){
        ClassicEditor
        .create( document.querySelector( '#content' ) )
        .then( newEditor => {
            this.editor = newEditor;
        } )
    },
    methods:{
        getDataFromEditor: function(){
            let formData = new FormData();
            formData.append('Content', this.content);
            formData.append('Description', this.description);
            formData.append('Title', this.title);
            formData.append('Thumbnail', new Blob(['abc123'], {type: 'text/plain'}))
            this.$api.post('/ArticleCreator/CreateArticle',
                formData
            ).then(response =>
                {alert(response)}
            )
        }
    }
}
</script>

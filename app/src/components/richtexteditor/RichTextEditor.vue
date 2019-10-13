<template>
    <div>
        <div id="editor_menu">
        </div>
        <div v-if="!showVisual" id="editor_content">
            <textarea class="editor" v-model="content"/>
        </div>
        <div v-else id="editor_compiled">
            <div v-for="(content,index) in compiledContent" :key="index">
            <div v-html="content"/>
            </div>
        </div>
        <b-button @click="toggleVisual()">Toggle Visual</b-button>
       </div>
</template>
<script>
import {BButton} from 'bootstrap-vue'
export default {
    name: 'RichTextEditor',
    components: {
        BButton
    },
    data: function(){
        return {
            content:'<h1>lal</h1>',
            compiledContent:[],
            showVisual:false
        }
    },
    watch:{
        content:function(){this.compileToHtml()}
    },
    methods:{
        compileToHtml: function(){
            let safeContent = String(this.content)//.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
            let regexH2 = new RegExp('\\*\\*(.*)\\*\\*','g');
            let compiled = safeContent.replace(regexH2,`<h2>$1</h2>`);
            
            let regexInstagram = new RegExp('(https?://www.)?instagram.com(/p/\\w+/?)','g');
            let regexYoutube = new RegExp('http(?:s?)://(?:www.)?youtu(?:be.com/watch\\?v=|.be/)([\\w\\-\\_]*)(&(amp;)?‌​[\\w\\?‌​=]*)?([^ ])([^\\$])([^\\ ])','g');
            let regexLink = new RegExp('(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.|){1}[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&\\/\\/=]*)','g');
            compiled = compiled.replace(regexLink, match => match.match(regexInstagram) || match.match(regexYoutube) 
             ? match
             : `<a href=${match}>${match}</a>`)
            let splitID="assa%%$#@hx___swx_s_a_q_qw_s"
            compiled = compiled.replace(regexYoutube, `<iframe src="https://www.youtube.com/embed/$1" />${splitID}`)
            compiled = compiled.replace(regexInstagram, (match)=>`<iframe style="width:auto;" src="${match}embed" />${splitID}`)
            compiled = `<p>${compiled.replace(/\n/g,'</p><p>')}</p>`;
            this.compiledContent =compiled.split(splitID);
        },
        toggleVisual: function(){
            this.showVisual = !this.showVisual;
        }
    }
}
</script>
<style scoped>
.editor{
    width:100%;
    min-height:40ex;
}
</style>

<template>
    <textarea class="editor" v-model="value"/>
</template>
<script>
export default {
    name: 'Editor',
    data: function(){
        return {
            compiledContent:[],
        }
    },
    props:{
        'H2':{
            default:false
        },
        value:{
            Type:String,
            default:''
        }
    },
    model: {
      prop: 'value',
      event: 'input'
    },
    watch:{
        value:function(){
            this.$emit('input',this.value)
        }
    },
    methods:{
        compileToHtml: function(){
            let compiled = String(this.value)//.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
            if(this.H2){
                let regexH2 = new RegExp('\\*\\*(.*)\\*\\*','g');
                compiled = compiled.replace(regexH2,`<h2>$1</h2>`);
            }
            let regexInstagram = new RegExp('(https?://www.)?instagram.com(/p/\\w+/?)','g');
            let regexYoutube = new RegExp('http(?:s?)://(?:www.)?youtu(?:be.com/watch\\?v=|.be/)([\\w\\-\\_]*)(&(amp;)?‌​[\\w\\?‌​=]*)?(.*)','g');
            let regexLink = new RegExp('(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.|){1}[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&\\/\\/=]*)','g');
            compiled = compiled.replace(regexLink, match => match.match(regexInstagram) || match.match(regexYoutube) 
             ? match
             : `<a href=${match}>${match}</a>`)
            let splitID="assa%%$#@hx___swx_s_a_q_qw_s"
            compiled = compiled.replace(regexYoutube, `<iframe src="https://www.youtube.com/embed/$1" />${splitID}`)
            compiled = compiled.replace(regexInstagram, (match)=>`<iframe class="iframe-instagram" src="${match}embed" />${splitID}`)
            compiled = `<p>${compiled.replace(/\n/g,'</p><p>')}</p>`;
            return compiled.split(splitID);
        },
    }
}
</script>
<style scoped>
.editor{
    width:100%;
    height:20ex;
}
@media(min-width: 500px){
.editor{
    width:100%;
    height:40ex;
}
}
</style>

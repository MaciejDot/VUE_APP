export default{
    compileToHtml: function(value){
            let compiled = String(value)//.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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
    }
}
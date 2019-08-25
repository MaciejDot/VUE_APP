<template>
    <div id="wikiArticle" style="display: -webkit-box;">
        <h1>{{title}}</h1>
    </div>  
</template>
<script>
export default {
    name: 'WikiArticle',
    props: [ title,  ]
  }
</script>
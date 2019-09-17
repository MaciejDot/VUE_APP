<template>
    <b-container>
        <b-row>
            <h1 style="margin-left: auto; margin-right: auto;text-align:center;">
                {{title}}
            </h1>
        </b-row>
        <div style="text-align:left;" v-html="content"/>
        <b-row>
            <b-col>
                {{author}}
            </b-col>
            <b-col>
                {{date}}
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import {BRow , BContainer, BCol} from 'bootstrap-vue'
export default {
    name : 'ArticleViewer',
    props : ['author','title','content','date'],
    components: {BRow, BContainer, BCol}
}
</script>
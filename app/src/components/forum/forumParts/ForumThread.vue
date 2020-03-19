<template>
  <div style="padding:5px;margin-bottom: 10px" v-on:click="resolveLink()">
    <b-card
      style="border-radius: 3px;
    border: 1px solid #e7e7e7;padding:5px;min-height:100px;cursor:pointer;"
    >
      <div style="text-align:left;">
        <strong>{{title}}</strong>
      </div>
      <b-media>
        <b-row>
          <b-col style="text-align:left;">created: {{dateCreated}}</b-col>
          <b-col>replies count : {{replies}}</b-col>
        </b-row>
      </b-media>
    </b-card>
  </div>
</template>
<script>
import {BCard, BMedia, BRow, BCol } from 'bootstrap-vue'
import {getFormattedDate} from "../../../library/dateFormatter.js"
export default {
    name:'ForumThread',
    props :['title','link','op','replies','created'],
    components:{
      BCard,
      BMedia,
      BRow,
      BCol
    },
    data:function(){
      return{
        dateCreated: getFormattedDate(this.created)
        }},
    methods:{
    resolveLink: function(){
        this.$router.push({path:this.link});
      }
    }
}
</script>
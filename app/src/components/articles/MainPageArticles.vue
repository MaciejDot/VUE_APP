<template>
<div>
  <div style="/*position: absolute;*/ top: 0px; left: 0px; width: 100%; height: 100%; /*overflow: hidden;*/ pointer-events: none; z-index: -100;">
      <h1>
      Articles
    </h1>
    </div>
    <b-container>
    <b-pagination class="pagination-custom" v-model="currentPage" :total-rows="20*500" align="fill"></b-pagination>
    </b-container>
    <div >
    <div >
     <ArticleThumbnail imagePath='/background.jpg' title ='example A' shortDescription='example B'/>
    </div>
    <div>
     <ArticleThumbnail imagePath='/background.jpg' title ='example A' shortDescription='example B'/>
    </div>
    <div >
     <ArticleThumbnail imagePath='/background.jpg' title ='example A' shortDescription='example B'/>
    </div>
   </div>
   <b-container>
    <b-pagination class="pagination-custom" v-model="currentPage" :total-rows="20*500" align="fill"></b-pagination>
    </b-container>
    </div>
  </template>
<script>
import {BContainer, BPagination} from 'bootstrap-vue'
import ArticleThumbnail from './articleComponents/ArticleThumbnail.vue'
export default {
    name: 'MainPageArticles',
    data:function(){
      return{
        currentPage: 2
      }
    },
    components:{
      ArticleThumbnail, BPagination, BContainer, 
    }
  }
</script>
<style>
  .pagination-custom{
    box-shadow: 2px 2px 5px 0px rgba(120,111,120,1);
    margin-top: 10px;
    margin-bottom:10px;
  }
  .pagination-custom a{
    color: black;
  }
</style>
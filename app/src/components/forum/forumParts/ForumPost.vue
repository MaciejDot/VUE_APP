<template>
<div style="padding:5px;">
  <div style="background-color:#f8f9fa!important;border-radius:10px;padding:10px;min-height:500px;box-shadow: 2px 2px 5px 0px rgba(120,111,120,1);margin-left: auto;
    margin-right: auto;max-width:1000px">
  <div style="position:relative;min-height:500px;">
   <div style="text-align:left;">{{author}}</div>
    <div class="row" v-html ="content" />
    <div style="text-align:right; border-top-style: solid; border-top-width: thin;position:absolute;width:100%;bottom: 5px;">
        {{date}}
    </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name: 'ForumPost',
    props:['title','content','author','date']
  }
</script>

<style>
img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
}

</style>

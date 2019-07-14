<template>
<div style="padding:5px;">
  <div style="background-color:#f8f9fa!important;border-radius:10px;padding:5px;min-height:100px;cursor:pointer;">
  
        <div style="text-align:left;"><strong>{{title}}</strong></div>
    <div class="row" >
        <div style="text-align:left;">
            {{description}}
        </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name:'ForumThread',
    props :['title']
}
</script>
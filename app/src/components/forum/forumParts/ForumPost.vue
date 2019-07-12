<template>
<div style="padding:5%;">
  <div style="background-color:#f8f9fa!important;border-radius:10px;padding:10px">
    <div class="row" >
        <div class="col-lg-3 col-sm-4 col-4">
        <div style="width:100px;">
          <img class="d-flex mr-3 rounded-circle" src="@/assets/avatar.png" alt>
          <div>Commenter Name</div>
          </div>
        </div>
        <div class="col-lg-9 col-sm-8 col-8">
            Cras sit amet nibh libero, in gravida nulla. 
            Nulla vel metus scelerisque ante sollicitudin. 
            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
             Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
    </div>
    <div style="text-align:right; border-top-style: solid; border-top-width: thin;">
        22-22-2022
    </div>
  </div>
</div>
</template>
<script>
export default {
    name: 'ForumPost' //,
    //props:['image','title','content','author']
  }
</script>

<style>
img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
}

</style>

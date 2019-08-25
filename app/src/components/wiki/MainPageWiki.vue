<template>
    <div id="wiki">
      <div style="height:20px" />
      <b-container>
      <b-form style="justify-content: center">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search thru wiki"></b-form-input>
        </b-form>
        </b-container>
    </div>  
</template>
<script>
import { BForm, BFormInput, BContainer } from 'bootstrap-vue'
export default {
    name: 'MainPageWiki',
    components : {
      BForm, BFormInput, BContainer
  }
  }
</script>
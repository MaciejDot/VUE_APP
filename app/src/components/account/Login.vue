<template>
    <div class="image-background">
        <b-container>
                <b-card>
                <b-form-input v-model="username" type="text" />
                <b-form-input v-model="password" type="password" />
                <b-button pill variant="primary">Log In</b-button>
            </b-card>
        </b-container>
    </div>
</template>
<script>
import { BButton, BFormInput, BCard, BContainer} from 'bootstrap-vue'
export default {
    data: function(){
        return {
            username : '',
            password : '',
        }
    },
    name : "Login",
    components :{BButton, BFormInput, BCard, BContainer}
}
</script>
<style scoped>
.image-background{
  filter: blur(2px);
  background-image: "/background.jpg"
}
</style>
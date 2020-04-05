<template>
  <div>
    <div class="background-login">
      <div class="separator" />
      <div class="login-modal">
        <div class="logo"></div>
        <div class="title">Calisthenics Encyclopedia</div>
        <div class="sub-title">Beta</div>
        <div class="fields">
          <div class="username">
            <svg fill="#222" viewBox="0 0 1024 1024">
              <path
                class="path1"
                d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.090c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.090c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z"
              />
            </svg>
            <input v-model="username" type="username" class="user-input" placeholder="Username" />
            <div v-if="errorUsername!=''" class="error-message">{{errorUsername}}</div>
          </div>
          <div class="username">
            <svg fill="#222" viewBox="0 0 1024 1024">
              <path
                class="path1"
                d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.090c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.090c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z"
              />
            </svg>
            <input v-model="email" type="username" class="user-input" placeholder="Email" />
            <div v-if="errorEmail!=''" class="error-message">{{errorEmail}}</div>
          </div>
          <div class="password">
            <svg fill="#222" viewBox="0 0 1024 1024">
              <path
                class="path1"
                d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"
              />
            </svg>
            <input v-model="password" type="password" class="pass-input" placeholder="Password" />
            <div v-if="errorPassword!=''" class="error-message">{{errorPassword}}</div>
          </div>
          <div class="password">
            <svg fill="#222" viewBox="0 0 1024 1024">
              <path
                class="path1"
                d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"
              />
            </svg>
            <input v-model="repeatPassword" type="password" class="pass-input" placeholder="repeat password" />
            <div v-if="errorRepeatPassword!=''" class="error-message">{{errorRepeatPassword}}</div>
          </div>
          <div v-if="error!=''" class="error-message">{{error}}</div>
        </div>
        <button class="signin-button" @click="signIn()">SIGN IN</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      username: "",
      password: "",
      error:"",
      repeatPassword: "",
      email:"",
      errorRepeatPassword:'',
      errorPassword:'',
      errorEmail:'',
      errorUsername:''
    };
  },
   mounted() {
    var self=this;
    window.addEventListener("keypress", function(e) {
      e.keyCode==13?self.signIn():null;

    });
  },
  methods: {
    registerModelValidation: function(){
        let answear = true;
        if(this.username.length < 6){
            this.errorUsername ="Username Should be at least 6 characters long";
            answear = false;
        }
        else{
            this.errorUsername ="";
        }
        
        let emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i
        if(this.email.match(emailRegexp) !=this.email){
            this.errorEmail="This is not a valid email"
            answear = false;
        }
        else{
            this.errorEmail=""
        }
        if(this.password.length<8){
            this.errorPassword="password should at least be 8 character long"
            answear = false;
        }
        else{
            this.errorPassword=""
        }
        if(this.repeatPassword!=this.password){
            this.errorRepeatPassword="passwords don't match"
            answear = false;
        }
        else{
            this.errorRepeatPassword=""
        }
        return answear;
    },
    signIn: function() {
        if(this.registerModelValidation()){
      this.$axios.account()
        .post("/Register", {
            email: this.email,
            username: this.username,
            password: this.password
        })
        .then(t => {
          this.$store.commit('jwtToken', t.data.token);
          this.$store.dispatch('updateAccountInfo');
          this.$router.push({ path: "/workout" });
        }).catch(()=>{
          this.error="Something went wrong ... ";
        });
        }
    }
  },
  name: "Register"
};
</script>
<style scoped>
.error-message{
  color:tomato;
}
.separator {
  height: 40px;
}
.login-modal {
  filter: blur(0.3px);
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
  width: 430px;
  height: 700px;
  padding: 60px 35px 35px 35px;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  background-color: white ;
}
@media (max-width: 600px) {
  .login-modal {
    width: 90vw;
    height: 125vh;
  }
}
.title {
  text-align: center;
  color: black;
  font-size: 28px;
  padding-top: 24px;
  letter-spacing: 0.5px;
}
.sub-title {
  text-align: center;
  color: black;
  font-size: 15px;
  padding-top: 7px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: bold;
}
.fields {
  width: 100%;
  padding: 100px 5px 30px 5px;
}
@media (max-width: 380px) {
  svg {
    display: none;
  }
  .fields {
    padding: 50px 5px 30px 5px;
  }
}
.fields input {
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  font-family: "Lato", sans-serif;
  color: black;
  padding: 10px 10px 10px 5px;
}
.username,
.password {
  display: block;
  border-bottom: 1px solid #303030;
  margin-bottom: 30px;
}
::placeholder {
  color: black;
  opacity: 1;
  font-size: 20px;
  font-weight: 300;
}
::-ms-input-placeholder {
  color: black;
  font-size: 20px;
  font-weight: 300;
}
.signin-button {
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  font-size: 22px;
  font-family: "Lato", sans-serif;
  color: black;
  text-align: center;
  letter-spacing: 1px;
  background: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}
.link {
  padding-top: 20px;
  text-align: center;
}
.link a {
  text-decoration: none;
  color: black;
  font-size: 20px;
}
.fields svg {
  height: 22px;
  margin-bottom: -3px;
  margin-right: 10px;
}
</style>
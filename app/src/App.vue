<template>
  <div id="app" style="margin-top:0px; position:relative;">
    <b-navbar style="border: 1px solid #e7e7e7;" toggleable="lg" type="light" variant="white" :sticky="true">
      <b-navbar-brand  to="/">Calisthenics Encyclopedia</b-navbar-brand>
      <b-navbar-toggle style="border-radius:1px;" target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="nav-link" to="/workout">Workout Program</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="nav-link" to="/Forum">Forum</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="nav-link" to="/articles">Articles</router-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-if="loged()" right>
            <template slot="button-content">
              <em>{{username()}}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="signOut()">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item v-else>
            <router-link class="nav-link" to="/LogIn">Log In</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view class="default-background"></router-view>
  </div>
</template>
<script>
import { BNavbar } from "bootstrap-vue";
export default {
  name: "app",
  components: { BNavbar },
  data: function() {
    return {
      usernameStatic: null
    };
  },
  mounted: function() {
    window.setInterval(() => {
      if (localStorage["token"] != undefined) {
        this.$axios
          .account()
          .get("/Token")
          .then(t => {
            localStorage["token"] = t.data.token;
          });
      }
    }, 2 * 60 * 
     1000);
  },
  methods: {
    signOut: function() {
      localStorage.clear();
      this.$router.push({ path: "SuccessSignOut" });
    },
    loged: function() {
      return !(localStorage["token"] == undefined);
    },
    username: function() {
      if (this.usernameStatic != null) {
        return this.usernameStatic;
      }
      this.$axios
        .account()
        .get("/AccountInfo")
        .then(r => {
          this.usernameStatic = r.data.username;
          return this.usernameStatic;
        })
        .catch(() => {
          localStorage.clear();
          return this.loged();
        });
    }
  }
};
</script>

<style lang="scss">
h1{
  margin: 20px !important;
}
#app {
  font-family: Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #bfd8ee;
}
iframe {
    border: 1px solid #eee;
    border-radius: 2px;
  }
  .iframe-instagram {
    border: 1px solid #eee;
    border-radius: 2px;
  }
@media (max-width: 199px) and (min-width: 150px) {
  iframe {
    width: 100px;
    height: 50px;
  }
  .iframe-instagram {
    width: 110px;
    height: 250px;
  }
}
@media (max-width: 239px) and (min-width: 200px) {
  iframe {
    width: 140px;
    height: 90px;
  }
  .iframe-instagram {
    width: 143px;
    height: 300px;
  }
}
@media (max-width: 299px) and (min-width: 240px) {
  iframe {
    width: 180px;
    height: 100px;
  }
  .iframe-instagram {
    width: 190px;
    height: 380px;
  }
}
@media (max-width: 345px) and (min-width: 300px) {
  iframe {
    width: 230px;
    height: 140px;
  }
  .iframe-instagram {
    width: 230px;
    height: 430px;
  }
}
@media (max-width: 399px) and (min-width: 346px) {
  iframe {
    width: 250px;
    height: 150px;
  }
  .iframe-instagram {
    width: 250px;
    height: 460px;
  }
}
@media (max-width: 450px) and (min-width: 400px) {
  iframe {
    width: 300px;
    height: 170px;
  }
  .iframe-instagram {
    width: 310px;
    height: 520px;
  }
}
@media (max-width: 700px) and (min-width: 451px) {
  iframe {
    width: 370px;
    height: 203px;
  }
  .iframe-instagram {
    width: 370px;
    height: 580px;
  }
}

@media (min-width: 701px) {
  iframe {
    width: 640px;
    height: 360px;
  }
  .iframe-instagram {
    width: 641px;
    height: 840px;
  }
}
</style>

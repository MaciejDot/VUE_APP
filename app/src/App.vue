<template>
  <div id="app" style="margin-top:0px; position:relative;">
  <b-navbar toggleable="lg" type="dark" variant="info" :sticky="true">
    <b-navbar-brand href="#">Calisthenics Encyclopedia</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item ><router-link 
        class="nav-link"
          :to="{name:'Main Page'}">Main Page</router-link></b-nav-item>
          <b-nav-item>
        <router-link
        class="nav-link"
          to="/wiki">Exercises Wiki</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link
        class="nav-link"
            to="/workout">Workout Program</router-link>
      </b-nav-item>
      <b-nav-item>
      <router-link 
      class="nav-link"
            to="/Forum">Forum</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link
            class="nav-link"
            to="/articles">Articles</router-link>
      </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form style="justify-content: center">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import { BNavbar } from 'bootstrap-vue'
export default {
  name: 'app',
  components: {BNavbar}
}
</script>

<style scoped>
#app {
  font-family: Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

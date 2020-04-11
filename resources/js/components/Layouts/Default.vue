<template>
  <div>
    <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-dark position-fixed p-1">
      <router-link class="navbar-brand col-sm-3 col-md-2 mr-0" v-if="!$route.meta.auth" to="/">Autenticação</router-link>
      <router-link class="navbar-brand col-sm-3 col-md-2 mr-0" v-else to="/home">Autenticação</router-link>
      <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <NavigationMenu></NavigationMenu>
    </nav>

    <router-view></router-view>
    
  </div>
</template>

<script>
  import store from '../../store';
  import {mapGetters, mapState} from 'vuex';
  import NavigationMenu from './Parts/NavigationMenu';

  export default {
    data() {
      return {
      }
    },
    components: {
      NavigationMenu
    },
    computed: {
      ...mapGetters({
                user: 'auth/user'
            }),
    }
  }
</script>

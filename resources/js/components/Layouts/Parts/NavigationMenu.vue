<template>
  <!-- <ul class="navbar-nav">
    <li class="nav-item" v-if="!$route.meta.auth">
      <router-link class="nav-link" to="/login">Entrar</router-link>
    </li>
    <li class="nav-item" v-if="!$route.meta.auth">
      <router-link class="nav-link" to="/register">Registrar</router-link>
    </li>
    <li class="nav-item" v-if="$route.meta.auth">
      <a class="nav-link" @click="logout()">Sair</a>
    </li>
  </ul> -->
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto"v-if="!isAuth">
      <li class="nav-item" >
        <router-link class="nav-link" to="/login">Entrar</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/register">Registrar</router-link>
      </li>

    </ul>
    <ul class="navbar-nav ml-auto" v-else>
      <li class="nav-item"></li>
        <a class="nav-link" @click="logout()" id="logout">Sair</a>
      </li>
    </ul>
  </div>

</template>

<script>
  import authMixin from '../../../mixins/authMixin';
  import store from '../../../store';
  import {mapGetters, mapState} from 'vuex';

  export default {
    data() {
      return {
        //
      }
    },
    computed: {
    ...mapGetters({
                user: 'auth/user',
                isAuth: 'auth/isAuth'
            }),
    },
    mixins: [authMixin]
  }
</script>
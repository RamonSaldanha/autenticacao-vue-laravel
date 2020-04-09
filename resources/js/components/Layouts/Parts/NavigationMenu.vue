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
    <ul class="navbar-nav ml-auto">
      <li class="nav-item" v-if="!$route.meta.auth">
        <router-link class="nav-link" to="/login">Entrar</router-link>
      </li>
      <li class="nav-item" v-if="!$route.meta.auth">
        <router-link class="nav-link" to="/register">Registrar</router-link>
      </li>
      <li class="nav-item" v-if="$route.meta.auth">
        <a class="nav-link" @click="logout()">Sair</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import authMixin from '../../../mixins/authMixin';

  export default {
    data() {
      return {
        //
      }
    },
    mixins: [authMixin]
  }
</script>
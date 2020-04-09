<template>
  <div class="auth-page">
    <div class="d-flex flex-column h-100">
      <div class="m-auto col-md-5">
      <form @submit.prevent="login()">
        <div class="form-group">
          <label for="exampleInputEmail1">E-mail</label>
          <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Senha</label>
          <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
        </div>

        <b-button native-type="submit" type="is-primary">Entrar</b-button>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
  import authMixin from '../../mixins/authMixin';

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    mixins: [authMixin]
  }
</script>

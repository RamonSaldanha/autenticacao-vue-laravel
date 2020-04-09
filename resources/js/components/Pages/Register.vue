<template>
  <div class="auth-page">
    <div class="d-flex flex-column h-100">
      <div class="m-auto col-md-5">
        <form @submit.prevent="signup()">
          <div class="form-group">
            <label for="nome-sobrenome">Nome e Sobrenome</label>
            <input type="text" v-model="name" :class="{ 'is-invalid': errors.name }" class="form-control" id="nome-sobrenome" aria-describedby="nome-sobrenome">
            <div class="invalid-feedback" v-if="errors.name">
              {{ errors.name[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">E-mail</label>
            <input type="email" v-model="email" class="form-control" :class="{ 'is-invalid': errors.email }" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div class="invalid-feedback" v-if="errors.email">
              {{ errors.email[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Senha</label>
            <input type="password" v-model="password" class="form-control" :class="{ 'is-invalid': errors.password }" id="exampleInputPassword1">
            <div class="invalid-feedback" v-if="errors.password">
              {{ errors.password[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="repetir-senha">Repetir Senha</label>
            <input type="password" id="repetir-senha" v-model="password_confirmation" :class="{ 'is-invalid': errors.password }" class="form-control">
            <div class="invalid-feedback" v-if="errors.password_confirmation">
              {{ errors.password_confirmation[0] }}
            </div>
          </div>

          <b-button native-type="submit" type="is-primary">Cadastrar</b-button>
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
        name: '',
        email: '',
        password: '',
        "password_confirmation": '',
        errors: {
          name: '',
          email: '',
          password: '',
          'password_confirmation': ''
        }
      }
    },
    mixins: [authMixin]
  }
</script>

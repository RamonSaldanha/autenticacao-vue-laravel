import store from '../store';

var authMixin = {

  methods: {
    login() {
      var buttonSubmit = $("button[type=submit]")
      buttonSubmit.addClass('is-loading')

      store.dispatch('auth/login',{
        email: this.email,
        password: this.password
      }).then( (response) => {
        buttonSubmit.removeClass('is-loading')
        localStorage.setItem('access_token', response.data.access_token)
        this.$router.push('home');
      }).catch(error=>{
        buttonSubmit.removeClass('is-loading')
        this.$buefy.toast.open({
            duration: 2500,
            message: `E-mail ou senha não colidem.`,
            position: 'is-bottom',
            type: 'is-danger'
        })
      });

    },
    signup() {
      var vm = this;
      var buttonSubmit = $("button[type=submit]");
      buttonSubmit.addClass('is-loading');

      store.dispatch('auth/signup',{
        name: vm.name,
        email: vm.email,
        password: vm.password,
        "password_confirmation": vm.password_confirmation
      }).then( (response) => {
          buttonSubmit.removeClass('is-loading')
          vm.$buefy.toast.open({
            duration: 5000,
            message: `Cadastro realizado com sucesso. Faça Login.`,
            position: 'is-bottom',
            type: 'is-success'
          })
          vm.$router.push('login');
      }).catch(error=>{
        vm.errors = error.responseJSON.errors;

        buttonSubmit.removeClass('is-loading')
        vm.$buefy.toast.open({
          duration: 2500,
          message: `Houve alguns erros nos formulários.`,
          position: 'is-bottom',
          type: 'is-danger'
        })
      });

    },
    logout() {
      var vm = this;   
      $('#logout').text('...')
      store.dispatch('auth/logout', localStorage.getItem('access_token'))
      .then(function (response) {
        localStorage.removeItem('access_token');
        $('#logout').text('Sair')
        vm.$buefy.toast.open({
          duration: 2500,
          message: `Você foi deslogado com sucesso.`,
          position: 'is-bottom',
          type: 'is-success'
        })
        vm.$router.push('login');
      })
    }
  },
}

export default authMixin
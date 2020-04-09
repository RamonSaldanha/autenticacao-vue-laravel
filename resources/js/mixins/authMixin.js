var authMixin = {
  methods: {
    signup() {
      var vm = this;
      var buttonSubmit = $("button[type=submit]")
      buttonSubmit.addClass('is-loading')
      $.ajax({
        url: '/api/auth/signup',
        data: {
          name: vm.name,
          email: vm.email,
          password: vm.password,
          "password_confirmation": vm.password_confirmation
        },
        method: "post",
        success: function(data){
          buttonSubmit.removeClass('is-loading')
          vm.$buefy.toast.open({
            duration: 5000,
            message: `Cadastro realizado com sucesso. Faça Login.`,
            position: 'is-bottom',
            type: 'is-success'
          })
          vm.$router.push('login');
        },
        error: function( response ) {
          vm.errors = response.responseJSON.errors;

          buttonSubmit.removeClass('is-loading')
          vm.$buefy.toast.open({
            duration: 2500,
            message: `Houve alguns erros nos formulários.`,
            position: 'is-bottom',
            type: 'is-danger'
          })
        }
      })
    },
    logout() {
      var vm = this;   

      axios.get('/api/auth/logout', { headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` } }).then(function (response) {
        localStorage.removeItem('access_token');
        vm.$buefy.toast.open({
          duration: 2500,
          message: `Você foi deslogado com sucesso.`,
          position: 'is-bottom',
          type: 'is-success'
        })
        vm.$router.push('login');
      })
    },
    login() {
      var buttonSubmit = $("button[type=submit]")

      buttonSubmit.addClass('is-loading')

      var vm = this
      axios.post('/api/auth/login', {
        email: vm.email,
        password: vm.password,
        "remember_me": true
      })
      .then(function (response) {
        buttonSubmit.removeClass('is-loading')
        
        localStorage.setItem('access_token', response.data.access_token)
        
        vm.$router.push('home');

      })
      .catch(function (error) {
        buttonSubmit.removeClass('is-loading')
        vm.$buefy.toast.open({
            duration: 2500,
            message: `E-mail ou senha não colidem.`,
            position: 'is-bottom',
            type: 'is-danger'
        })
      });
    }
  },
}

export default authMixin
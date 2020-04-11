export default {

  loginUser( user ) {
      return axios.post('/api/auth/login', {
        email: user.email,
        password: user.password,
        "remember_me": true
      })
  },

  getUser( token ) {
    return axios.get('/api/auth/user', 
    { headers: { Authorization: `Bearer ${token}` } });
  },
  
  registerUser( user ) {
      return $.ajax({
        url: '/api/auth/signup',
        data: {
          name: user.name,
          email: user.email,
          password: user.password,
          "password_confirmation": user.password_confirmation
        },
        method: "post",
      });

      // return axios.post('/api/auth/signup', {
      //   name: user.name,
      //   email: user.email,
      //   password: user.password,
      //   "password_confirmation": user.password_confirmation
      // });
  },


}
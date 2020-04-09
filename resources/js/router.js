import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from './components/Pages/Welcome'
import Logged from './components/Pages/Logged'
import Login from './components/Pages/Login'
import PageNotFound from './components/Pages/PageNotFound'
import Register from './components/Pages/Register'

const axios = require('axios').default;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Welcome, meta: {auth: false} },
    { path: '/home', component: Logged, meta: {auth: true} },
    { path: '/login', component: Login, meta: {auth: false} },
    { path: '/register', component: Register, meta: {auth: false} },
    { path: "/*", component: PageNotFound, meta: {auth: false} }
  ],
  mode: 'history'
})

/*
verificar autenticação
Aqui ele verificará qual parametro foi passado no meta para saber
se precisa de autenticação ou não. to.matched.some(record => record.meta.auth)
*/

router.beforeEach((to, from, next) => {
  if( to.matched.some(record => record.meta.auth) ) {
    if( !localStorage.getItem('access_token') ) {
      next({
        path: '/login',
        // query: { redirect: to.fullPath }
      })
    }
  } else {

  }
  next();
})


export default router
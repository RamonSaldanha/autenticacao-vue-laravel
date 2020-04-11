import Vue from 'vue';
import VueRouter from 'vue-router';

import store from "./store/index";

const axios = require('axios').default;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: () => import('./components/Pages/Welcome'), meta: {auth: false} },
    { path: '/login', component: () => import('./components/Pages/Login'), meta: {auth: false} },
    { path: '/register', component: () => import('./components/Pages/Register'), meta: {auth: false} },
    /* autenticated pages */
    { path: '/home', component: () => import('./components/Pages/Logged'), meta: {auth: true, role: 1} },
    { path: '/admin', component: () => import('./components/Pages/Admin/Dashboard'), meta: {auth: true, role: 9} },
    
    { path: "/*", component: () => import('./components/Pages/PageNotFound'), meta: {auth: false} },
  ],
  mode: 'history'
})

/*
verificar autenticação
Aqui ele verificará qual parametro foi passado no meta para saber
se precisa de autenticação ou não. to.matched.some(record => record.meta.auth)
*/

router.beforeEach((to, from, next) => {
  // console.log(store.getters['auth/token'])
  if( to.meta.auth ) {
    if( !localStorage.getItem('access_token') ) {
      next({
        path: '/login',
        // query: { redirect: to.fullPath }
      })
    } else {
      store.dispatch('auth/getUsetByToken', localStorage.getItem('access_token') )
      .then( (response) => {
        if (to.meta.role != response.data.role) {
          // se não houver permissão você é redirecionado para a página inicial
          next({
            path: '/',
          })
        }
      }).catch(error => {
        // se der algum erro volta pra tela de login
        next({
          path: '/login',
        })
      })
    }
  } 
  next();
})


export default router
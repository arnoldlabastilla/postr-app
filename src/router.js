import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/app',
      name: 'app',
      component: () => import('./views/Application.vue'),
      children: [
        {
          path: 'endpoints',
          name: 'app.endpoints',
          component: () => import('./views/application/endpoint/List.vue')
        },
        {
          path: 'endpoints/:id',
          name: 'app.endpoints.show',
          component: () => import('./views/application/endpoint/Show.vue')
        }
      ]
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('./views/Auth.vue'),
      children: [
        {
          path: 'register',
          name: 'auth.register',
          component: () => import('./views/auth/Register.vue')
        },
        {
          path: 'login',
          name: 'auth.login',
          component: () => import('./views/auth/Login.vue')
        }
      ]
    }
  ]
})

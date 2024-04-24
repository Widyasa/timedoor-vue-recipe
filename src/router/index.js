import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'
import { store } from '@/stores/index.js'
const checkAuth = () => {
  const jwtCookie = Cookies.get("jwt")
  const expirationDate = Cookies.get("tokenExpirationDate")
  const userId = Cookies.get("UID")
  if (jwtCookie) {
    if (new Date().getTime() < +expirationDate) {
        store.commit("auth/setToken", {
          idToken: jwtCookie,
          expiresIn: expirationDate
        })
      store.dispatch("auth/getUser", userId)
      return true
    } else {
      store.commit("auth/setUserLogout")
      return  false
    }
  } else {
    return  false
  }
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  import('../views/HomeView.vue'),
      beforeEnter: (to, from, next) => {
        checkAuth() ? next() : next({name : "login"})
      }
    },
    {
      path: '/login',
      name: 'login',
      component:  import('../views/LoginPage.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component:  import('../views/SignupPage.vue')
    },
    {
      path: '/recipe/:id',
      name: 'detailRecipe',
      component:  import('../views/DetailPage.vue'),
      beforeEnter: (to, from, next) => {
        checkAuth() ? next() : next({name : "login"})
      }
    },
    {
      path: '/user/:component',
      name: 'userView',
      component:  import('../views/UserPage.vue'),
      beforeEnter: (to, from, next) => {
        checkAuth() ? next() : next({name : "login"})
      }
    },
    {
      path: '/new-recipe',
      name: 'newRecipe',
      component:  import('../views/NewRecipePage.vue'),
      beforeEnter: (to, from, next) => {
        checkAuth() ? next() : next({name : "login"})
      }
    },
  ]
})

export default router

import { createStore } from 'vuex'
import { recipe } from '@/stores/recipe.js'
import { auth } from '@/stores/auth.js'

export const store = createStore({
  modules : {
    recipe,
    auth
  },
})
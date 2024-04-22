import { createStore } from 'vuex'
import { recipe } from '@/stores/recipe.js'

export const store = createStore({
  modules : {
    recipe,
  },
})
import axios from 'axios'

export const recipe = {
  namespaced : true,
  state() {
    return {
      recipes : [],
      recipeDetail : {}
    }
  },
  getters : {},
  mutations : {
    setRecipeData(state, payload) {
      state.recipes = payload
    },
    setRecipeDetail(state, payload) {
      state.recipeDetail = payload
    }
  },
  actions : {
    async getRecipeData({commit})  {
      try {
        const {data} = await axios.get(
          "https://vue-js-recipe-project-default-rtdb.firebaseio.com/recipes.json"
        )
        const arr = []
        for (let key in data) {
          arr.push({id:key, ...data[key]})
        }
        commit("setRecipeData", arr)

      } catch (e) {
        console.error(e)
      }
  },
    async getDetailRecipe({commit}, payload)  {
      try {
        const {data} = await axios.get(
            `https://vue-js-recipe-project-default-rtdb.firebaseio.com/recipes/${payload}.json`
        )
        commit("setRecipeDetail", data)

      } catch (e) {
        console.error(e)
      }
  }

  }
}
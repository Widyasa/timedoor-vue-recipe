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
    },
    setNewRecipe(state, payload) {
      state.recipes.push.payload
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
  },
    async addNewRecipe({commit, rootState}, payload) {
      const newData = {
        ...payload,
        username: rootState.auth.userLogin.username,
        createdAt: Date.now(),
        likes: ["null"],
        userId: rootState.auth.userLogin.userId
      }
      try {
        const {data} = await axios.post(
          `https://vue-js-recipe-project-default-rtdb.firebaseio.com/recipes.json?auth=${rootState.auth.token}`, newData
        )
        commit("setNewRecipe", {id: data.name, ...newData})
      } catch (e) {
        console.error(e)
      }
    }

  }
}
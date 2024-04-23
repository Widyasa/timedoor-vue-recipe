import Cookies from 'js-cookie'
import axios from 'axios'

export const auth =   {
  namespaced :true,
  state() {
    return {
        token : null,
      tokenExpiredDate : null,
      userLogin : {},
      isLogin : false
    }
  },
  mutations : {
      setToken(state, {idToken, expiresIn}) {
        state.token = idToken
        state.tokenExpiredDate = expiresIn
        Cookies.set("tokenExpirationDate", expiresIn)
        Cookies.set("jwt", idToken)
      },
      setUserLogin(state, {userData, loginStatus}) {
        state.userLogin = userData
        state.isLogin = loginStatus
      },
    setUserLogout(state){
        state.token = null
        state.userLogin = {}
        state.tokenExpiredDate = null
        Cookies.remove("jwt")
        Cookies.remove("tokenExpirationDate")
        Cookies.remove("UID")
    }
  },
  actions : {
      async getRegisterData({commit, dispatch}, payload) {
        const apiKey = "AIzaSyCQ1Dtdro6V6k8Sgpzyf5UP_IoBY1TiROQ"
        const authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
        try {
          const {data} = await axios.post(authUrl + apiKey, {
              email : payload.email,
              password : payload.password,
              returnSecureToken : true
          })
          commit("setToken", {
            idToken : data.idToken,
            expiresIn : new Date().getTime() + Number.parseInt(data.expiresIn) * 1000
          })
          const newUserData = {
            userId : data.localId, firstName: payload.firstName,
            lastName : payload.lastName, username: payload.username,
            email : payload.email, imageLInk : payload.imageLInk
          }
          Cookies.set("UID", newUserData.userId)
          await dispatch("addNewUser", newUserData)
        } catch (e) {
          console.error(e)
        }
      },
      async addNewUser ({commit, state}, payload) {
        try {
          const {data} = await axios.post(
            `https://vue-js-recipe-project-default-rtdb.firebaseio.com/user.json?auth=${state. token}`, payload
          )
          commit("setUserLogin", {userData : payload, loginStatus:true})
        } catch (e) {
          console.error(e)
        }
      },
    async getLoginData({commit, dispatch}, payload) {
        const apiKey = "AIzaSyCQ1Dtdro6V6k8Sgpzyf5UP_IoBY1TiROQ"
        const authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
      try {
        const {data} = await axios.post(authUrl + apiKey, {
          email : payload.email,
          password : payload.password,
          returnSecureToken : true
        })
        commit("setToken", {
          idToken : data.idToken,
          expiresIn : new Date().getTime() + Number.parseInt(data.expiresIn) * 1000
        })
        await dispatch("getUser", data.localId)
      } catch (e) {
        console.error(e)
      }
    },
    async getUser({commit}, payload) {
        try{
          const {data} =  await axios.get(`http://vue-js-recipe-project-default-rtdb.firebaseio.com/user.json`)
          for (let key in data) {
            if (data[key].userId === payload) {
              Cookies.set("UID", data[key].userId)
              commit("setUserLogin", {
                userData : data[key], loginStatus: true
              })
            }
          }
        } catch (e) {
          console.error(e)
        }
    }
  }
}
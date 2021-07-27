const state = () => ({
  user : null  
})

const mutations = {
    setUser : (state,user) => state.user = user
}

const actions = {
    SET_USER : ({commit},user) => commit('setUser',user)
}

const getters = {
    user : (state)=>state.user
}

export const strict = false

export default {
  state,
  mutations,
  getters,
  actions,
}



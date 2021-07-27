import { auth } from '@/services/firebase.js'

export default (context) => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        return resolve(store.commit('auth/setUser', user))
      }
      return resolve()
    })
  })
}
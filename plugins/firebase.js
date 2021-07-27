
import { StoreDB, auth } from '@/services/firebase.js'

export default (ctx, inject) => {
  inject('fstore', StoreDB)
  inject('fauth', auth)
}
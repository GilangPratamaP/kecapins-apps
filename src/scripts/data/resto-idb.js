import { openDB } from 'idb'
import CONFIG from '../globals/config'

const { DB_NAME, DB_VERSION, OBJECT_STORE_NAME } = CONFIG

const openIdb = openDB(DB_NAME, DB_VERSION, {
  upgrade (db) {
    // Create a store of objects
    db.createObjectStore(OBJECT_STORE_NAME, {
      // The 'id' property of the object will be the key.
      keyPath: 'id',
      // If it isn't explicitly set, create a value by auto incrementing.
      autoIncrement: true
    })
  }
})

const FavRestoIdb = {

  async getResto (id) {
    if (!id) {
      return
    }
    return (await openIdb).get(OBJECT_STORE_NAME, id)
  },

  async getAllResto () {
    return (await openIdb).getAll(OBJECT_STORE_NAME)
  },

  async putResto (resto) {
    // eslint-disable-next-line no-prototype-builtins
    if (!resto.hasOwnProperty('id')) {
      return
    }
    // eslint-disable-next-line consistent-return
    return (await openIdb).put(OBJECT_STORE_NAME, resto)
  },

  async deleteResto (id) {
    return (await openIdb).delete(OBJECT_STORE_NAME, id)
  }
}

export default FavRestoIdb

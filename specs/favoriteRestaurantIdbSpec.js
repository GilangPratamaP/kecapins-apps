/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract'
import FavRestoIdb from '../src/scripts/data/resto-idb'

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavRestoIdb.getAllResto()).forEach(async (restaurant) => {
      await FavRestoIdb.deleteResto(restaurant.id)
    })
  })
  itActsAsFavoriteRestaurantModel(FavRestoIdb)
})

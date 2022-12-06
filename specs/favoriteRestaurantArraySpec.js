/* eslint-disable eqeqeq */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */

import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract'

let favoriteResto = []

const FavoriteRestaurantArray = {
  getResto (id) {
    if (!id) {
      return
    }

    return favoriteResto.find((Restaurant) => Restaurant.id == id)
  },

  getAllResto () {
    return favoriteResto
  },

  putResto (resto) {
    if (!resto.hasOwnProperty('id')) {
      return
    }

    if (this.getResto(resto.id)) {
      return
    }

    favoriteResto.push(resto)
  },

  deleteResto (id) {
    favoriteResto = favoriteResto.filter((resto) => resto.id != id)
  }
}

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteResto = [])

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray)
})

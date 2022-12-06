import favoriteResto from '../data/resto-idb'
import {
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate
} from '../views/templates/template-creator'
import { initSwalError, initSwalSuccess } from './swal-initiator'

const LikeButtonPresenter = {
  async init ({ likeButtonContainer, favoriteResto, data }) {
    this._likeButtonContainer = likeButtonContainer
    this._restaurant = data
    this._favoriteResto = favoriteResto

    await this._renderButton()
  },

  async _renderButton () {
    try {
      const { id } = this._restaurant

      // get resto in indexed db
      const restaurant = await favoriteResto.getResto(id)

      if (restaurant) {
        this._renderLikedButtonTemplate()
      } else {
        this._renderLikeButtonTemplate()
      }
    } catch (err) {
      console.error(err)
      initSwalError(err.message)

      throw new Error(err)
    }
  },

  async _isRestoExist (id) {
    const restaurant = await this._favoriteResto.getResto(id)
    return !!restaurant
  },

  _renderLikeButtonTemplate () {
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate() // append html

    const likeButton = document.querySelector('#likeButton')

    likeButton.addEventListener('click', async () => {
      // onClick fav the selected resto
      await favoriteResto.putResto(this._restaurant)
      initSwalSuccess('Nice, success add this item to your favorite list!')
      this._renderButton()
    })
  },

  _renderLikedButtonTemplate () {
    this._likeButtonContainer.innerHTML = createUnlikeRestoButtonTemplate() // append html

    const likeButton = document.querySelector('#likeButton')

    likeButton.addEventListener('click', async () => {
      // onClick unfav the selected resto
      await favoriteResto.deleteResto(this._restaurant.id)
      initSwalSuccess('Success remove this item from your favorite list!')
      this._renderButton()
    })
  }
}

export default LikeButtonPresenter

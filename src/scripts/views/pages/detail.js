import UrlParser from '../../routes/url-parser'
import RestaurantSource from '../../data/resto-source'
import { createLikeRestoButtonTemplate, restoDetail } from '../../views/templates/template-creator'
import LikeButtonPresenter from '../../utils/like-button-presenter'
import FavRestoIdb from '../../data/resto-idb'

const Detail = {
  async render () {
    return `
        <div class="container">
          <div id="main-container">
            <h2 tabindex="0" class="title-container">Resto Detail</h2>
            <section id="detail-resto"></section>
          </div>
          <div class="like" id="likeButtonContainer"></div>
        </div>
      `
  },

  // Fungsi ini akan dipanggil setelah render()
  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const data = await RestaurantSource.getRestaurantDetail(url.id)
    const detailContainer = document.querySelector('#detail-resto')
    detailContainer.innerHTML = restoDetail(data.restaurant)
    const likeButtonContainer = document.querySelector('#likeButtonContainer')
    likeButtonContainer.innerHTML = createLikeRestoButtonTemplate()

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavRestoIdb,
      data: {
        id: url.id,
        name: data.restaurant.name,
        description: data.restaurant.description,
        city: data.restaurant.city,
        address: data.restaurant.address,
        rating: data.restaurant.rating,
        pictureId: data.restaurant.pictureId,
        category: data.restaurant.name
      }
    })
  }
}

export default Detail

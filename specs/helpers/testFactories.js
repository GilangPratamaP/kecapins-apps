import FavRestoIdb from '../../src/scripts/data/resto-idb'
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter'

const createLikeButtonPresenterWithRestaurant = async (data) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavRestoIdb,
    data
  })
}

export { createLikeButtonPresenterWithRestaurant }

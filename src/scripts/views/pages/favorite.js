import FavRestoIdb from '../../data/resto-idb'
import { restoCard } from '../templates/template-creator'

const Favorite = {
  async render () {
    return `
      <div class="container">
        <h2 tabindex="0" class="title-container">Favorited Resto</h2>
        <section id="fav-resto"></section>
      </div>
    `
  },

  async afterRender () {
    // get fav resto
    const data = await FavRestoIdb.getAllResto()
    const favRestoContainer = document.querySelector('#fav-resto')
    // display all fav resto
    if (data.length < 1) {
      favRestoContainer.innerHTML = 'Halo, you dont have any favorite restaurant'
    }
    data.forEach((resto) => {
      favRestoContainer.innerHTML += restoCard(resto)
    })
  }
}

export default Favorite

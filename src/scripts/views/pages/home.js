import RestaurantSource from '../../data/resto-source'
import { restoCard } from '../templates/template-creator'

const Home = {
  async render () {
    return `
        <div class="container">
  
          <div id="main-container">
            <h1 tabindex="0" class="main-content__title">Explore Your Favorite Places</h1>
  
            <section id="explore-restaurant"></section>
          </div>
        </div>
      `
  },

  // Fungsi ini akan dipanggil setelah render()
  async afterRender () {
    const data = await RestaurantSource.getRestaurantList() // fetch restaurant list
    const listContainer = document.querySelector('#explore-restaurant')
    data.restaurants.forEach((restaurant) => {
      listContainer.innerHTML += restoCard(restaurant)
    })
  }
}

export default Home

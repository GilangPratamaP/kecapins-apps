import CONFIG from '../../globals/config'

const restoDetail = (resto) => `
  <div tabindex="0" class="detail">
    <div class="img-container">
        <img tabindex="0" class="lazyload" id="detail-img" alt="${resto.name}" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"/>
    </div>

    <ul class="detail-info">
      <li>
        <i title="restaurant" class="fas fa-store-alt icon-primary"></i>
        <p tabindex="0" class="detail-name-address-rating">${resto.name}</p>
        </li>

      <li>
        <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
        <p tabindex="0" class="detail-name-address-rating">${resto.address}, ${resto.city}</p>
        </li>

      <li>
        <i title="ratings"></i>
        <p tabindex="0" class="detail-name-address-rating">⭐️${resto.rating}</p>
      </li>

      <li><p tabindex="0"class="detail-desc">${resto.description}</p></li>

      <li>${resto.categories.map((category) => `
            <span tabindex="0" class="category">#${category.name}</span>
          `
        ).join('')}
      </li>
    </ul>
    <div class="detail-menu">
    <h2 class="list-menu" tabindex="0">List Menu</h2>
      <div class="detail-food">
        <h3 tabindex="0">Food</h3>
        <ul tabindex="0">
          ${resto.menus.foods.map((food, i) => `
              <li><p>${i + 1}) ${food.name}</p></li>
            `
            ).join('')}
        <ul>
      </div>

      <div class="detail-drink">
        <h3 tabindex="0">Drink</h3>
        <ul tabindex="0">
          ${resto.menus.drinks.map((drink, i) => `
            <li><p>${i + 1}) ${drink.name}</p></li>
           `
           ).join('')}
        <ul>
      </div>
      
      <div class="container-detail-review">
      <h3>Review</h3>
        <br>
          <ul>${resto.customerReviews.map((custReview) => `
          </li>
            <div class="review-card" tabindex="0">
              <div class="reviewer-name">
                  ${custReview.name}
              </div>
              <div class="reviewer-date">
                  ${custReview.date}
              </div>
              <div class="review">
                  ${custReview.review}
              </div>
            </div>
          </li>`).join('')} 
        </ul>
      </div>
    </div>
  </div>
`

const restoCard = (rumahmakan) => `
    <div tabindex="0" class="card">
      <a href="#/resto/${rumahmakan.id}" class="card-a-tag">
        <div class="img-container">
        <img tabindex="0" class="lazyload" id="detail-img" alt="${rumahmakan.name}" data-src="${CONFIG.BASE_IMAGE_URL + rumahmakan.pictureId}"/>
        <div class="movie-item__header__rating">
        <p tabindex="0><span class="movie-item__header__rating__score">⭐️${rumahmakan.rating}</span></p>
        </div>
    </div>

      <div class="card-content">
        <p tabindex="0" class="card-content-title">${rumahmakan.name}</p>
        <p tabindex="0" class="card-content-title">${rumahmakan.city}</p>
        <p tabindex="0" class="penjelasan">${rumahmakan.description}</p>
    </div>
  `

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  restoDetail,
  restoCard,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate
}

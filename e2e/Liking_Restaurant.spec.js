/* eslint-disable no-undef */

const assert = require('assert')

Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('Showing empty liked resto', ({ I }) => {
  I.seeElement('#fav-resto')
  I.see('Halo, you dont have any favorite restaurant')
})

Scenario('Liking one resto', async ({ I }) => {
  I.see('Halo, you dont have any favorite restaurant')

  I.amOnPage('/')

  I.seeElement('.card a')

  const firstFilm = locate('.card a').first()
  const firstFilmTitle = await I.grabTextFrom(firstFilm)
  I.click(firstFilm)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.card')
  const likedFilmTitle = await I.grabTextFrom('.card')
  assert.strictEqual(firstFilmTitle, likedFilmTitle)
})

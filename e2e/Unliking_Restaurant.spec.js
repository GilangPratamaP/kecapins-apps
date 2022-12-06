/* eslint-disable no-undef */

const assert = require('assert')

Feature('Unliking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('Showing empty liked resto', ({ I }) => {
  I.seeElement('#fav-resto')
  I.see('Halo, you dont have any favorite restaurant')
})

Scenario('Unliking one resto', async ({ I }) => {
  I.dontSeeElement('.card a')

  I.amOnPage('/')
  I.waitForElement('.card a')

  const firstFilm = locate('.card a').first()
  const firstFilmTitle = await I.grabTextFrom(firstFilm)
  I.click(firstFilm)
  I.waitForElement('#likeButton')

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.waitForElement('.card')
  I.seeElement('.card')
  const unlikeFilmTitle = await I.grabTextFrom(firstFilm)
  assert.strictEqual(firstFilmTitle, unlikeFilmTitle)

  I.seeElement('.card a')
  await I.grabTextFrom(firstFilm)
  I.click(firstFilm)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.dontSeeElement('.card')
})

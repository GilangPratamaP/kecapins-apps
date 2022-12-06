/* eslint-disable no-undef */
import FavRestoIdb from '../src/scripts/data/resto-idb'
import * as TestFactories from './helpers/testFactories'

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(() => {
    addLikeButtonContainer()
  })

  it('should show the like button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeTruthy()
  })

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="unlike this resto"]'))
      .toBeFalsy()
  })

  it('should be able to like the resto', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const data = await FavRestoIdb.getResto(1)

    expect(data).toEqual({ id: 1 })
    FavRestoIdb.deleteResto(1)
  })

  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavRestoIdb.putResto({ id: 1 })
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    // tidak ada film yang ganda
    expect(await FavRestoIdb.getAllResto()).toEqual([{ id: 1 }])

    FavRestoIdb.deleteResto(1)
  })

  it('should not add a resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({})

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    expect(await FavRestoIdb.getAllResto()).toEqual([])
  })
})

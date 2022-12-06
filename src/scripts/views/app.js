import DrawerInitiator from '../utils/drawer-initiator'
import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'

class App {
  constructor ({ menu, main2, drawer, content }) {
    this._menu = menu
    this._main2 = main2
    this._drawer = drawer
    this._content = content

    this._initialAppShell()
  }

  _initialAppShell () {
    DrawerInitiator.init({
      menu: this._menu,
      main2: this._main2,
      drawer: this._drawer,
      content: this._content
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()
  }
}
const skipLinkElem = document.querySelector('.skip-link')
skipLinkElem.addEventListener('click', (event) => {
  event.preventDefault()
  document.querySelector('#main-content').focus()
})

export default App

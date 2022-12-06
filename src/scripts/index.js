/* eslint-disable no-unused-vars */
import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/responsive.css'
import '../scripts/components/header-comp'
import '../scripts/components/main-comp'
import '../scripts/components/footer-comp'
import App from './views/app'
import swRegister from './utils/sw-register'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const app = new App({
  menu: document.querySelector('#menu'),
  main2: document.querySelector('main'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main-content')

})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})

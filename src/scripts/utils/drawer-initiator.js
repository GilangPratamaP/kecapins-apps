const DrawerInitiator = {
  init ({ menu, main2, drawer }) {
    menu.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer)
    })

    main2.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer)
    })
  },
  _toggleDrawer (event, drawer) {
    event.stopPropagation()
    drawer.classList.toggle('open')
  },

  _closeDrawer (event, drawer) {
    event.stopPropagation()
    drawer.classList.remove('open')
  }
}

export default DrawerInitiator

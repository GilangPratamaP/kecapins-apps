class HeaderComp extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML =
    `<div class="header__inner">
      <a href="/"><h2 class="header__title" alt="Kecapins Catalogue">KECAPINS</h2></a>
      <button type="menu" id="menu" class="header__menu" aria-label="navigation-menu">☰</button>
      <label for="menu">Do you want to see list of menu?</label>
      <nav id="drawer" class="nav">
      <ul class="nav__list">
        <li class="nav__item"><a href="/">Home</a></li>
        <li class="nav__item"><a href="#/favorite">Favorite</a></li>
        <li class="nav__item"><a target ="_blank" href="https://www.instagram.com/glgprtm029" rel="noopener">About Us</a></li>
      </ul>
    </nav>
    </div> 
  `
  }
}

customElements.define('header-comp', HeaderComp)

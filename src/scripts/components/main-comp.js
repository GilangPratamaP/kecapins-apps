class MainComp extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML =
    `<div class="hero">
      <div class="hero__inner">
        <h1 tabindex="0" class="hero__title">Kecapins Catalogue</h1>
        <p tabindex="0" class="hero__tagline">"We have what you looking for, find it best on your locations"</p>
      </div>
    </div>
        <section>
        <div id="main-content" tabindex="0"></div>
        </section>
    `
  }
}

customElements.define('main-comp', MainComp)

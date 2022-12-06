class FooterComp extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML =
    `
    <h3 tabindex="0">Copyright &copy; Gilang Pratama. All Rights Reserved.</h3>
    `
  }
}

customElements.define('footer-comp', FooterComp)

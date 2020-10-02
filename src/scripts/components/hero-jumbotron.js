class HeroJumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero__content">
        <h1 class="hero__title">eatery!</h1>
        <i class="hero__subtitle">eat good, life good.</i>
      </div>
    `;
  }
}

customElements.define('hero-jumbotron', HeroJumbotron);

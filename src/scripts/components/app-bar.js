class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <button class="button__drawer"><i class="fas fa-bars" aria-label="Navigation menu"></i></button>
    <h1>eatery!</h1>
    <nav>
        <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/favorites">Favorites</a></li>
            <li><a href="https://github.com/hifra01">About Us</a></li>
        </ul>
    </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);

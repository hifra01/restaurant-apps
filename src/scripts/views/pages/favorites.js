import RestaurantSource from '../../data/restaurant-source';
import IMAGE_URL from '../../globals/image-url';

const Favorites = {
  async render() {
    return `
    <section>
      <h2 class="section-title">Your favorite restaurants!</h2>
      <div class="restaurant-list">
        <span class="loading-placeholder">Loading data...</span>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurantList = document.querySelector('.restaurant-list');
    const loading = document.querySelector('.loading-placeholder');
    try {
      const data = await RestaurantSource.restaurantsList();
      restaurantList.innerHTML = '';
      data.forEach((restaurant) => {
        restaurantList.innerHTML += `
          <div class="restaurant-item">
          <div class="item-photo">
            <img src=${IMAGE_URL.SMALL + restaurant.pictureId} alt="${restaurant.name}">
          </div>
          <div class="item-detail">
            <h3 class="item-title">${restaurant.name}</h3>
            <p class="item-city">${restaurant.city}</p>
            <div class="item-rating">
              <i class="fas fa-star"></i>
              <p>${restaurant.rating}/5</p>
            </div>
            <p class="item-desc">${restaurant.description}</p>
            <a href="#/detail/${restaurant.id}" class="item-link">DETAIL</a>
          </div>
        </div>
        `;
      });
    } catch (e) {
      loading.innerText = `Oops. Something's wrong. Please try again. Detail: ${e}`;
    }
  },
};

export default Favorites;

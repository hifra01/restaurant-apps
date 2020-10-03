import createRestaurantItem from '../templates/restaurant-item';
import FavoriteRestaurantIdb from '../../data/restaurant-idb';

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
      const data = await FavoriteRestaurantIdb.getAllRestaurants();
      if (data.length > 0) {
        restaurantList.innerHTML = '';
        data.forEach((restaurant) => {
          restaurantList.innerHTML += createRestaurantItem(restaurant);
        });
      } else {
        loading.innerText = 'You haven\'t put any restaurant to your favorite list.';
      }
    } catch (e) {
      loading.innerText = `Oops. Something's wrong. Please try again. Detail: ${e}`;
    }
  },
};

export default Favorites;

import RestaurantSource from '../../data/restaurant-source';
import createRestaurantItem from '../templates/restaurant-item';

const Home = {
  async render() {
    return `
    <section>
      <h2 class="section-title">Your must-try restaurants!</h2>
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
        restaurantList.innerHTML += createRestaurantItem(restaurant);
      });
    } catch (e) {
      loading.innerText = `Oops. Something's wrong. Please try again. Detail: ${e}`;
    }
  },
};

export default Home;

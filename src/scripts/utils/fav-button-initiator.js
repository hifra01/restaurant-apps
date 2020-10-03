import FavoriteRestaurantIdb from '../data/restaurant-idb';
import { createFavoriteButtonTemplate, createFavoritedButtonTemplate } from '../views/templates/fav-button';

const FavButtonInitiator = {
  async init({ favButtonContainer, restaurant }) {
    this.favButtonContainer = favButtonContainer;
    this.restaurant = restaurant;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.restaurant;

    if (await this.isRestaurantExist(id)) {
      this.renderFavorited();
    } else {
      this.renderFavorite();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  renderFavorite() {
    this.favButtonContainer.innerHTML = createFavoriteButtonTemplate();

    const favButton = document.querySelector('#favButton');
    favButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this.restaurant);
      await this.renderButton();
    });
  },

  renderFavorited() {
    this.favButtonContainer.innerHTML = createFavoritedButtonTemplate();

    const favButton = document.querySelector('#favButton');
    favButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this.restaurant.id);
      await this.renderButton();
    });
  },
};

export default FavButtonInitiator;

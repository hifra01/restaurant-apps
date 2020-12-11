import { createFavoriteRestaurantButtonTemplate, createUnfavoriteRestaurantButtonTemplate } from '../views/templates/fav-button';

const FavButtonPresenter = {
  async init({ favButtonContainer, favoriteRestaurants, restaurant }) {
    this.favButtonContainer = favButtonContainer;
    this.restaurant = restaurant;
    this.favoriteRestaurants = favoriteRestaurants;

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
    const restaurant = await this.favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  renderFavorite() {
    this.favButtonContainer.innerHTML = createFavoriteRestaurantButtonTemplate();

    const favButton = document.querySelector('#favButton');
    favButton.addEventListener('click', async () => {
      await this.favoriteRestaurants.putRestaurant(this.restaurant);
      await this.renderButton();
    });
  },

  renderFavorited() {
    this.favButtonContainer.innerHTML = createUnfavoriteRestaurantButtonTemplate();

    const favButton = document.querySelector('#favButton');
    favButton.addEventListener('click', async () => {
      await this.favoriteRestaurants.deleteRestaurant(this.restaurant.id);
      await this.renderButton();
    });
  },
};

export default FavButtonPresenter;

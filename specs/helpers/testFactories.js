/* eslint-disable import/prefer-default-export */
import FavButtonPresenter from '../../src/scripts/utils/fav-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/restaurant-idb';

const createFavButtonPresenterWithRestaurant = async (restaurant) => {
  await FavButtonPresenter.init({
    favButtonContainer: document.querySelector('#favButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createFavButtonPresenterWithRestaurant };

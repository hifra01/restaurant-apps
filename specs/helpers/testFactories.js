import FavButtonPresenter from '../../src/scripts/utils/fav-button-presenter';

const createFavButtonPresenterWithRestaurant = async (restaurant) => {
  await FavButtonPresenter.init({
    favButtonContainer: document.querySelector('#favButtonContainer'),
    restaurant,
  });
};

export { createFavButtonPresenterWithRestaurant };

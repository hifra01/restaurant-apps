import FavButtonPresenter from '../src/scripts/utils/fav-button-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/restaurant-idb';
import * as TestFactories from './helpers/testFactories';

const addFavButtonContainer = () => {
  document.body.innerHTML = '<div id="favButtonContainer"></div>';
};

describe('Unfavoring A Restaurant', () => {
  beforeEach(async () => {
    addFavButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unfavor widget when the restaurant has been favored', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Remove this restaurant from your favorites."]'))
      .toBeTruthy();
  });

  it('should not display favorite widget when the restaurant has been favored', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Add this restaurant to your favorites."]'))
      .toBeFalsy();
  });

  it('should be able to remove favored restaurant from the list', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="Remove this restaurant from your favorites."]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unfavored restaurant is not in the list', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="Remove this restaurant from your favorites."]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});

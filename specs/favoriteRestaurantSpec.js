import FavoriteRestaurantIdb from '../src/scripts/data/restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Favoring a Restaurant', () => {
  const addFavButtonContainer = () => {
    document.body.innerHTML = '<div id="favButtonContainer"></div>';
  };

  beforeEach(() => {
    addFavButtonContainer();
  });

  it('should show the favorite button when the movie has not been favored before', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Add this restaurant to your favorites."]'))
      .toBeTruthy();
  });

  it('should not show the unfavorite button when the movie has not been favored before', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Remove this restaurant from your favorites."]'))
      .toBeFalsy();
  });

  it('should be able to favorite a restaurant', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });;

    document.querySelector('#favButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already favored.', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    document.querySelector('#favButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({});

    document.querySelector('#favButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});

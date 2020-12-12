/* eslint-disable no-undef,no-await-in-loop,no-restricted-syntax */
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    for (const restaurant of (await FavoriteRestaurantIdb.getAllRestaurants())) {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    }
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});

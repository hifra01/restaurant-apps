const assert = require('assert');

Feature('Favorite restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
})

const firstEmptyFavorite = "You haven't put any restaurant to your favorite list."

Scenario('showing empty favored restaurants', ({ I }) => {
  I.seeElement('.restaurant-list');
  I.see(firstEmptyFavorite, '.loading-placeholder');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  I.see(firstEmptyFavorite, '.loading-placeholder');

  I.amOnPage('/');

  I.seeElement('.restaurant-item .item-detail a');
  const firstRestaurantTitle = await I.grabTextFrom(locate('.restaurant-item .item-detail .item-title').first());
  I.click(locate('.restaurant-item .item-detail a').first());

  I.seeElement('#favButton');
  I.click('#favButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restaurant-item');
  const favoredRestaurantTitle = await I.grabTextFrom(locate('.restaurant-item .item-detail .item-title'));

  assert.strictEqual(firstRestaurantTitle, favoredRestaurantTitle);
});

Scenario('unfavoring a restaurant', async ({ I }) => {
  I.see(firstEmptyFavorite, '.loading-placeholder');

  I.amOnPage('/');

  I.seeElement('.restaurant-item .item-detail a');
  const firstRestaurantTitle = await I.grabTextFrom(locate('.restaurant-item .item-detail .item-title').first());
  I.click(locate('.restaurant-item .item-detail a').first());

  I.seeElement('#favButton');
  I.click('#favButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restaurant-item');
  const favoredRestaurantTitle = await I.grabTextFrom(locate('.restaurant-item .item-detail .item-title'));

  assert.strictEqual(firstRestaurantTitle, favoredRestaurantTitle);

  I.click(locate('.restaurant-item .item-detail a'));

  I.seeElement('#favButton');
  I.click('#favButton');

  I.amOnPage('/#/favorites');
  const noFavRestaurant = await I.grabTextFrom('.loading-placeholder');

  assert.strictEqual(noFavRestaurant, firstEmptyFavorite);
});

Scenario('reviewing a restaurant', async ({ I }) => {
  I.see(firstEmptyFavorite, '.loading-placeholder');

  I.amOnPage('/');
  I.seeElement('.restaurant-item .item-detail a');
  I.click(locate('.restaurant-item .item-detail a').first());
  I.seeElement('.review__input__group');
  const reviewName = 'hill from codecept';
  I.fillField('formName', reviewName);
  I.fillField('formReview', 'codecept uwu');
  I.click('#formSubmit');

  const lastReview = locate('.review__display__item h3').last();
  const lastReviewName = await I.grabTextFrom(lastReview);

  assert.strictEqual(reviewName, lastReviewName);
});

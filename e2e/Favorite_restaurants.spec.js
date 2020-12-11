Feature('Favorite restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
})

Scenario('showing empty favored restaurants', ({ I }) => {
  I.seeElement('.restaurant-list');
  I.see("You haven't put any restaurant to your favorite list.", '.loading-placeholder');
});

Scenario('favoriting one restaurant', ({ I }) => {
  I.see("You haven't put any restaurant to your favorite list.", '.loading-placeholder');

  I.amOnPage('/');

  I.seeElement('.restaurant-item .item-detail a');
  I.click(locate('.restaurant-item .item-detail a').first());

  I.seeElement('#favButton');
  I.click('#favButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restaurant-item');
})

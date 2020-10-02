import IMAGE_URL from '../../globals/image-url';

function createRestaurantItem(restaurant) {
  return `
  <div class="restaurant-item">
    <div class="item-photo">
      <img src=${IMAGE_URL.SMALL + restaurant.pictureId} alt="${restaurant.name}">
    </div>
    <div class="item-detail">
      <h3 class="item-title">${restaurant.name}</h3>
      <p class="item-city">${restaurant.city}</p>
      <div class="item-rating">
        <i class="fas fa-star"></i>
        <p>${restaurant.rating}/5</p>
      </div>
      <p class="item-desc">${restaurant.description}</p>
      <a href="#/detail/${restaurant.id}" class="item-link">DETAIL</a>
    </div>
  </div>
`;
}

export default createRestaurantItem;

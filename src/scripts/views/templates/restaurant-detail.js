import IMAGE_URL from '../../globals/image-url';

function createRestaurantDetail(restaurant) {
  return `
    <div class="detail card">
      <div class="detail__image">
        <img src="${IMAGE_URL.MEDIUM + restaurant.pictureId}" alt="${restaurant.name}">  
      </div>
      <div class="detail__info">
        <h2 class="detail__info__name">${restaurant.name}</h2> 
        <p class="detail__info__rating">Rating: ${restaurant.rating}/5</p>
        <p class="detail__info__address">${restaurant.address}, ${restaurant.city}</p>
        <p></p>
        <div class="detail__info__category">
          <h3>Category</h3>
          ${restaurant.categories.map((category) => `
            <span class="category__name">${category.name}</span>
          `).join('')}
        </div>
        <div class="detail__info__description">
        <h3>Description</h3>
        <p>${restaurant.description}</p>
      </div>
      </div>
    </div>
    
    <div class="menu card">
      <h2>Menu</h2>
      <div class="menu__wrapper">
      <div class="menu__category">
      <h3>Food</h3>
      ${restaurant.menus.foods.map((food) => `
        <p class="menu__item">${food.name}</p>
      `).join('')}
      </div>
      <div class="menu__category">
      <h3>Drink</h3>
        ${restaurant.menus.drinks.map((drink) => `
        <p class="menu__item">${drink.name}</p>
      `).join('')}
      </div>
      </div>
    </div>
    
    <div class="review card">
      <h2>Review</h2>
      <div class="review__display">
        ${restaurant.customerReviews.map((review) => `
        <div class="review__display__item">
          <h3>${review.name}</h3>
          <p>${review.review}</p>
          <p class="review__date">${review.date}</p>
        </div>
      `).join('')}
      </div>
    </div>
  `;
}

export default createRestaurantDetail;

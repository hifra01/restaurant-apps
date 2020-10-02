import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import IMAGE_URL from '../../globals/image-url';
import SubmitReview from '../../utils/submit-review';

const Detail = {
  async render() {
    return `
    <section class="restaurant-detail">
      <p class="loading-placeholder">Loading data...</p>
    </section>
    <section class="review__form card">
      <h2>Post a Review!</h2>
      <form>
        <div class="review__input__group">
          <label for="formName" class="form__label">Name</label>
          <input id="formName" name="formName" type="text" class="form__input">
        </div>
        <div class="review__input__group">
          <label for="formReview" class="form__label">Review</label>
          <input id="formReview" name="formReview" type="text" class="form__input">
        </div>
        <button id="formSubmit" type="submit" class="form__submit">SUBMIT</button>
      </form>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector('.restaurant-detail');
    const loading = document.querySelector('.loading-placeholder');
    try {
      const restaurant = await RestaurantSource.restaurantDetail(url.id);
      detailContainer.innerHTML = `
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
          ${restaurant.consumerReviews.map((review) => `
          <div class="review__display__item">
            <h3>${review.name}</h3>
            <p>${review.review}</p>
            <p class="review__date">${review.date}</p>
          </div>
        `).join('')}
        </div>
      </div>
      
      
      `;
    } catch (e) {
      loading.innerText = `Oops. Something's wrong. Please try again. Detail: ${e}`;
    }

    const btnSubmit = document.querySelector('#formSubmit');
    const reviewName = document.querySelector('#formName');
    const reviewContent = document.querySelector('#formReview');

    btnSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      if (reviewName.value === '' || reviewContent.value === '') {
        // eslint-disable-next-line no-alert
        alert('Harap isi semua kolom.');
        reviewName.value = '';
        reviewContent.value = '';
      } else {
        SubmitReview(url.id, reviewName.value, reviewContent.value);
        reviewName.value = '';
        reviewContent.value = '';
      }
    });
  },
};

export default Detail;

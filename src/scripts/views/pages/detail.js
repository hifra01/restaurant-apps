import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import SubmitReview from '../../utils/submit-review';
import createRestaurantDetail from '../templates/restaurant-detail';
import FavButtonPresenter from '../../utils/fav-button-presenter';

const Detail = {
  async render() {
    return `
    <section class="restaurant-detail">
      <p class="loading-placeholder">Loading data...</p>
    </section>
    <div id="favButtonContainer"></div>
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
      detailContainer.innerHTML = createRestaurantDetail(restaurant);

      await FavButtonPresenter.init({
        favButtonContainer: document.querySelector('#favButtonContainer'),
        restaurant,
      });
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

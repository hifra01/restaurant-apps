import RestaurantSource from '../data/restaurant-source';

const SubmitReview = (id, name, review) => {
  const data = {
    id,
    name,
    review,
  };
  RestaurantSource.postReview(data);

  const reviewDisplay = document.querySelector('.review__display');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  reviewDisplay.innerHTML += `
    <div class="review__display__item">
      <h3>${name}</h3>
      <p>${review}</p>
      <p class="review__date">${date}</p>
    </div>
  `;
};

export default SubmitReview;

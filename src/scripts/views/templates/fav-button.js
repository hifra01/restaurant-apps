const createFavoriteRestaurantButtonTemplate = () => `
  <button aria-label="Add this restaurant to your favorites." id="favButton" class="fav">
    <i class="fas fa-star" aria-hidden="true"></i>
  </button>
`;

const createUnfavoriteRestaurantButtonTemplate = () => `
  <button aria-label="Remove this restaurant from your favorites." id="favButton" class="fav fav--active">
    <i class="fas fa-star" aria-hidden="true"></i>
  </button>
`;

export { createFavoriteRestaurantButtonTemplate, createUnfavoriteRestaurantButtonTemplate };

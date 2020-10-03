const createFavoriteButtonTemplate = () => `
  <button aria-label="Add this restaurant to your favorites." id="favButton" class="fav">
    <i class="fas fa-star" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="Add this restaurant to your favorites." id="favButton" class="fav fav--active">
    <i class="fas fa-star" aria-hidden="true"></i>
  </button>
`;

export { createFavoriteButtonTemplate, createFavoritedButtonTemplate };

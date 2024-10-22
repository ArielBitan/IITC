import { API_BASE_URL, API_KEY } from "./api.js";
import { createItemElement } from "./script.js";
const ol = document.getElementById("apiData");

// Load favorites from local storage
function getFavoritesFromLocalStorage() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

// Save favorites to local storage
function saveFavoritesToLocalStorage(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Check if a movie is in favorites
function isFavorite(movieId) {
  const favorites = getFavoritesFromLocalStorage();
  return favorites.includes(movieId);
}

// Toggle favorite status
function toggleFavorite(movieId, favoriteIcon) {
  let favorites = getFavoritesFromLocalStorage();

  if (isFavorite(movieId)) {
    // Remove from favorites
    favorites = favorites.filter((id) => id !== movieId);
    favoriteIcon.src = "./photos/Sprite-0001.png"; // Not favorite icon
  } else {
    // Add to favorites
    favorites.push(movieId);
    favoriteIcon.src = "./photos/Sprite-0002.png"; // Favorite icon
  }

  saveFavoritesToLocalStorage(favorites);

  // Render again to remove from dom if on favorite page
  if (isFavoritesPage()) {
    renderFavorites();
  }
}

// Check if current page is favorites page
function isFavoritesPage() {
  return window.location.pathname.includes("favorites.html");
}

// Render favorites from localStorage
function renderFavorites() {
  const favorites = getFavoritesFromLocalStorage();
  ol.innerHTML = "";

  if (favorites.length === 0) {
    ol.innerHTML = "<p>No movies to show</p>";
  } else {
    favorites.forEach((movieId) => {
      fetch(`${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((movie) => {
          createItemElement(movie);
        })
        .catch((error) => {
          console.error("Error loading movie:", error);
        });
    });
  }
}

export {
  getFavoritesFromLocalStorage,
  saveFavoritesToLocalStorage,
  isFavorite,
  renderFavorites,
  toggleFavorite,
  isFavoritesPage,
};

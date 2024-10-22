import { ENDPOINTS, API_BASE_URL, API_KEY } from "./api.js";
import {
  isFavorite,
  renderFavorites,
  isFavoritesPage,
  toggleFavorite,
} from "./favorites.js";

const select = document.getElementById("sort");
const ol = document.getElementById("apiData");

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

if (!isFavoritesPage()) {
  addEventListeners();
}

// Add search bar event listener and sorting event listener
function addEventListeners() {
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchButton.click();
    }
  });
  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      renderFromApi(
        `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}`
      );
    } else if (query === "") {
      console.log("s");

      renderFromApi(ENDPOINTS.POPULAR);
    }
  });
  select.addEventListener("change", (e) => {
    ol.textContent = "";
    const selectedValue = e.target.value;

    const apiToCall =
      {
        "popular-week": ENDPOINTS.TRENDING_WEEK,
        "popular-day": ENDPOINTS.TRENDING_DAY,
        popular: ENDPOINTS.POPULAR,
      }[selectedValue] || ENDPOINTS.POPULAR;

    renderFromApi(apiToCall);
  });
}

// Create movie item element and append to movies list
function createItemElement(movie) {
  const item = document.createElement("div");
  item.className = "item";

  const imgContainer = createImageElement(
    `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    movie.id
  );
  item.appendChild(imgContainer);

  const movieDetailsSection = document.createElement("div");
  movieDetailsSection.classList.add("movie-details");

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("title-container");

  titleContainer.appendChild(createMovieTitleLink(movie));
  const movieYear = document.createElement("div");
  movieYear.textContent = movie.release_date.slice(0, 4);

  movieDetailsSection.appendChild(titleContainer);
  movieDetailsSection.appendChild(movieYear);
  movieDetailsSection.appendChild(createVoteAvgSection(movie.vote_average));

  item.appendChild(movieDetailsSection);
  ol.appendChild(item);
}

// Create image element
function createImageElement(src, movieId) {
  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";

  const posterImg = document.createElement("img");
  posterImg.src = src;
  posterImg.alt = "preview-image";

  const addToFavoritesImg = document.createElement("img");
  addToFavoritesImg.src = isFavorite(movieId)
    ? "./photos/Sprite-0002.png"
    : "./photos/Sprite-0001.png";
  addToFavoritesImg.alt = "favorites-img";
  addToFavoritesImg.className = "favorite-img";

  // Add click event to toggle favorite
  addToFavoritesImg.addEventListener("click", () => {
    toggleFavorite(movieId, addToFavoritesImg);
  });

  imgContainer.appendChild(posterImg);
  imgContainer.appendChild(addToFavoritesImg);

  return imgContainer;
}

// Create movie title link
function createMovieTitleLink(movie) {
  const movieTitleLink = document.createElement("a");
  movieTitleLink.href = `movie-details.html?id=${movie.id}`;
  movieTitleLink.textContent = movie.title;
  return movieTitleLink;
}

// Create vote average section
function createVoteAvgSection(voteAverage) {
  const voteAvgSection = document.createElement("div");
  voteAvgSection.className = "vote-average-section";

  const voteStarIcon = document.createElement("img");
  voteStarIcon.src = "./photos/star_icon.png";

  const voteAvg = document.createElement("span");
  voteAvg.textContent = voteAverage.toFixed(1);

  voteAvgSection.appendChild(voteStarIcon);
  voteAvgSection.appendChild(voteAvg);

  return voteAvgSection;
}

// Fetch and render movies from API
function renderFromApi(api) {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      ol.innerHTML = "";

      // If we are not on the favorites page render all movies
      if (!isFavoritesPage()) {
        data.results.forEach((movie) => {
          createItemElement(movie);
        });
      } else {
        // If on the favorites page render favorites instead
        renderFavorites();
      }

      // If there are no movies to show print a message
      if (ol.innerHTML === "") {
        ol.innerHTML = "<p>No movies to show</p>";
      }
    })
    .catch((error) => {
      console.error("Error loading movies:", error);
      ol.innerHTML = "<p>Failed to load movies</p>";
    });
}

if (isFavoritesPage()) {
  renderFavorites();
} else {
  renderFromApi(ENDPOINTS.POPULAR); // default
}

export { createItemElement };

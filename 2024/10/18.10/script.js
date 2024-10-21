const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "b3605e82f6566cec259bac46e84f0579";

const ENDPOINTS = {
  POPULAR: `${API_BASE_URL}/movie/popular?api_key=${API_KEY}`,
  TRENDING_WEEK: `${API_BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  TRENDING_DAY: `${API_BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
};

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
    favoriteIcon.src = "./Sprite-0001.png"; // Not favorite icon
  } else {
    // Add to favorites
    favorites.push(movieId);
    favoriteIcon.src = "./Sprite-0002.png"; // Favorite icon
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
    ? "./Sprite-0002.png"
    : "./Sprite-0001.png";
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
  voteStarIcon.src = "./star_icon.png";

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

if (isFavoritesPage()) {
  renderFavorites();
} else {
  renderFromApi(ENDPOINTS.POPULAR); // default
}

import { ENDPOINTS, API_BASE_URL } from "./api.js";
import { API_KEY } from "./env.js";

import {
  isFavorite,
  renderFavorites,
  isFavoritesPage,
  toggleFavorite,
} from "./favorites.js";

let currentPage = 1;
const select = document.getElementById("sort");
const ol = document.getElementById("apiData");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const currentPageInput = document.getElementById("currentPage");
const previousPageButton = document.getElementById("previousPage");
const nextPageButton = document.getElementById("nextPage");

let currentApi = `${API_BASE_URL}/movie/popular?api_key=${API_KEY}`;

if (!isFavoritesPage()) {
  addEventListeners();
}

function addEventListeners() {
  addNavigationListeners();
  addSearchListeners();
  addSortingListeners();
  addPageInputListener();
}

// Adds event listeners for pressing the 'nextPage' button and 'previousPage' button
function addNavigationListeners() {
  previousPageButton.addEventListener("click", () => navigatePage(-1));
  nextPageButton.addEventListener("click", () => navigatePage(1));
}

// Adds 1/-1 to the current page and ensures the page number doesn't go below 1
async function navigatePage(direction) {
  await renderFromApi(currentApi);
  currentPage = Math.max(1, currentPage + direction);
  currentPageInput.value = currentPage;
}

// Add event listeners for search bar when user presses the search button or presses 'enter'
function addSearchListeners() {
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchButton.click();
    }
  });

  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    currentPage = 1;
    currentApi = query
      ? `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}`
      : ENDPOINTS.POPULAR; // Perform the search based on current sorting value from select

    renderFromApi(currentApi);
  });
}

// Add event listener for changing the select item and sort based on selected value
function addSortingListeners() {
  select.addEventListener("change", (e) => {
    ol.textContent = "";
    const selectedValue = e.target.value;

    currentApi =
      {
        "popular-week": ENDPOINTS.TRENDING_WEEK,
        "popular-day": ENDPOINTS.TRENDING_DAY,
        popular: ENDPOINTS.POPULAR,
      }[selectedValue] || ENDPOINTS.POPULAR;

    currentPage = 1;
    renderFromApi(currentApi);
  });
}

// Add event listener for current page input
function addPageInputListener() {
  currentPageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const pageNumber = parseInt(currentPageInput.value);
      if (!isNaN(pageNumber) && pageNumber > 0) {
        renderFromApi(currentApi);
        currentPage = pageNumber;
      } else {
        alert("Please enter a valid page number.");
      }
    }
  });
}

// Create the whole movie 'card' with poster image and details section
function createItemElement(movie) {
  const item = document.createElement("div");
  item.className = "item";

  const imgContainer = createImageElement(
    `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    movie.id
  );
  item.appendChild(imgContainer);

  const movieDetailsSection = createMovieDetailsSection(movie);
  item.appendChild(movieDetailsSection);

  ol.appendChild(item);
}

// Create the details section with title,vote avg and year
function createMovieDetailsSection(movie) {
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

  return movieDetailsSection;
}

// Create the poster image and add the 'favorite' icon on top left
function createImageElement(src, movieId) {
  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";

  const posterImg = document.createElement("img");
  posterImg.src = src;
  posterImg.alt = "preview-image";

  const addToFavoritesImg = createFavoritesImage(movieId);
  imgContainer.appendChild(posterImg);
  imgContainer.appendChild(addToFavoritesImg);

  return imgContainer;
}

// Create 'favorite' icon and check if movie is in favorites
function createFavoritesImage(movieId) {
  const img = document.createElement("img");
  img.src = isFavorite(movieId)
    ? "./photos/Sprite-0002.png"
    : "./photos/Sprite-0001.png";
  img.alt = "favorites-img";
  img.className = "favorite-img";

  img.addEventListener("click", () => {
    toggleFavorite(movieId, img);
  });

  return img;
}

// Create movie title and make it a link to movie details
function createMovieTitleLink(movie) {
  const movieTitleLink = document.createElement("a");
  movieTitleLink.href = `movie-details.html?id=${movie.id}`;
  movieTitleLink.textContent = movie.title;
  return movieTitleLink;
}

// Create the vote average section with number and star icon
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

// This function gets an api as a parameter and creates elements on the page based on it
async function renderFromApi(api) {
  api += `&page=${currentPage}`;
  try {
    const response = await fetch(api);
    const data = await response.json();
    ol.innerHTML = "";

    if (!isFavoritesPage()) {
      data.results.forEach(createItemElement);
    } else {
      renderFavorites();
    }

    if (ol.innerHTML === "") {
      ol.innerHTML = "<p>No movies to show</p>";
    }
  } catch (error) {
    console.error("Error loading movies:", error);
    ol.innerHTML = "<p>Failed to load movies</p>";
  }
}

if (isFavoritesPage()) {
  renderFavorites();
} else {
  renderFromApi(currentApi);
}

export { createItemElement };

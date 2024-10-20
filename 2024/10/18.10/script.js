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

renderFromApi(ENDPOINTS.POPULAR);
addEventListeners();

function createItemElement(movie, ol) {
  const item = document.createElement("div");
  item.className = "item";

  item.appendChild(
    createImageElement(`https://image.tmdb.org/t/p/w500${movie.poster_path}`)
  );

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

function renderFromApi(api) {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      ol.innerHTML = "";

      data.results.forEach((movie) => {
        createItemElement(movie, ol);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      ol.innerHTML = "<p>Failed to load movies. Please try again later.</p>";
    });
}

function createImageElement(src) {
  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";
  const posterImg = document.createElement("img");
  posterImg.src = src;
  posterImg.alt = "preview-image";
  const addToFavoritesImg = document.createElement("img");
  addToFavoritesImg.src = "./download.png";
  addToFavoritesImg.alt = "favorites-img";
  addToFavoritesImg.className = "favorite-img";
  imgContainer.appendChild(posterImg);
  imgContainer.appendChild(addToFavoritesImg);
  return imgContainer;
}

function createMovieTitleLink(movie) {
  const movieTitleLink = document.createElement("a");
  movieTitleLink.href = `movie-details.html?id=${movie.id}`;
  movieTitleLink.textContent = movie.title;
  return movieTitleLink;
}

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

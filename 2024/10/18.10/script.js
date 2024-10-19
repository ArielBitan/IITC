// Fetch popular movies
fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=b3605e82f6566cec259bac46e84f0579"
)
  .then((response) => response.json())
  .then((data) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
    const ol = document.getElementById("apiData");

    // Display each movie in the list
    data.results.forEach((movie) => {
      const item = document.createElement("div");
      item.className = "item";

      const img = document.createElement("img");
      img.src = `${imageBaseUrl}${movie.poster_path}`;
      img.alt = "preview-image";

      const movieDetailsSection = document.createElement("div");
      movieDetailsSection.classList.add("movie-details");

      const titleContainer = document.createElement("div");
      titleContainer.classList.add("title-container");

      const movieTitle = document.createElement("li");
      movieTitle.textContent = movie.title;

      const movieYear = document.createElement("div");
      movieYear.textContent = movie.release_date.slice(0, 4);

      const voteAvgSection = document.createElement("div");
      voteAvgSection.className = "vote-average-section";

      const voteStarIcon = document.createElement("img");
      const voteAvg = document.createElement("span");

      voteStarIcon.src = "./star_icon.png";
      voteAvg.textContent = movie.vote_average.toFixed(1);

      voteAvgSection.appendChild(voteStarIcon);
      voteAvgSection.appendChild(voteAvg);
      titleContainer.appendChild(movieTitle);

      movieDetailsSection.appendChild(titleContainer);
      movieDetailsSection.appendChild(movieYear);
      movieDetailsSection.appendChild(voteAvgSection);

      item.appendChild(img);
      item.appendChild(movieDetailsSection);

      ol.appendChild(item);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

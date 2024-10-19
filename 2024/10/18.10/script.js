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
      const li = document.createElement("li");

      // Create the image element
      const img = document.createElement("img");
      img.src = `${imageBaseUrl}${movie.poster_path}`;
      img.alt = "image";

      // Create a section to hold the movie details
      const movieDetailsSection = document.createElement("div");
      movieDetailsSection.classList.add("movie-details");

      // Create a container for the title and counter
      const titleContainer = document.createElement("div");
      titleContainer.classList.add("title-container");

      // Create the movie title element
      const movieTitle = document.createElement("span");
      movieTitle.textContent = movie.title;

      // Create the release year element
      const movieYear = document.createElement("div");
      movieYear.textContent = movie.release_date;

      // Append the movie title to the title container
      titleContainer.appendChild(movieTitle);

      // Append title and year to movie details section
      movieDetailsSection.appendChild(titleContainer);
      movieDetailsSection.appendChild(movieYear);

      // Append the image and the details section to the list item
      li.appendChild(img);
      li.appendChild(movieDetailsSection);

      // Append the list item to the ordered list
      ol.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

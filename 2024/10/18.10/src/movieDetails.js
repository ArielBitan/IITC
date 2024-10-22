import { fetchMovieDetails, fetchMovieCredits } from "./api.js";

const movieId = new URLSearchParams(window.location.search).get("id");

// an object containing all dom elements
const elements = {
  movieTitle: document.getElementById("movie-title"),
  moviePoster: document.getElementById("movie-poster"),
  releaseDate: document.getElementById("release-date"),
  overview: document.getElementById("overview"),
  runtime: document.getElementById("runtime"),
  genres: document.getElementById("genres"),
  castList: document.getElementById("cast-list"),
};

/*
call fetchMovieDetails from api.js then take the movie details (response.json) change all dom elements and pass the data from 
credits api , the next then. takes this data and creates a list of actors and their characters with this data 
*/
fetchMovieDetails(movieId)
  .then((movie) => {
    populateMovieDetails(movie);
    return fetchMovieCredits(movieId);
  })
  .then((credits) => populateCastList(credits.cast))
  .catch((error) =>
    console.error("Error fetching movie details or credits:", error)
  );

// populate movie details
const populateMovieDetails = (movie) => {
  elements.movieTitle.textContent = movie.title;
  elements.moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  elements.releaseDate.textContent = `Release Date: ${movie.release_date}`;
  elements.overview.textContent = `Overview: ${movie.overview}`;
  elements.runtime.textContent = `Runtime: ${movie.runtime} minutes`;
  elements.genres.textContent = `Genres: ${movie.genres
    .map((genre) => genre.name)
    .join(", ")}`;
};

// populate cast list with actor names and their characters
const populateCastList = (cast) => {
  const topActors = cast.slice(0, 10);
  topActors.forEach((actor) => {
    const li = document.createElement("li");
    li.textContent = `${actor.name} as ${actor.character}`;
    elements.castList.appendChild(li);
  });
};

const API_KEY = "b3605e82f6566cec259bac46e84f0579";

// fetchMovieDetails now contains an async function that takes the movieId and fetches the data about the movie
const fetchMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    );
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};

// this does the same as fetchMovieDetails but fetches from the 'credits' api to get the actors list
const fetchMovieCredits = async (movieId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error fetching movie credits:", error);
  }
};

export { fetchMovieDetails, fetchMovieCredits };

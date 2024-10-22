const API_KEY = "b3605e82f6566cec259bac46e84f0579";
const API_BASE_URL = "https://api.themoviedb.org/3";

const ENDPOINTS = {
  POPULAR: `${API_BASE_URL}/movie/popular?api_key=${API_KEY}`,
  TRENDING_WEEK: `${API_BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  TRENDING_DAY: `${API_BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
};

// fetchMovieDetails now contains an async function that takes the movieId and fetches the data about the movie
const fetchMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
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
      `${API_BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error fetching movie credits:", error);
  }
};

export {
  fetchMovieDetails,
  fetchMovieCredits,
  ENDPOINTS,
  API_BASE_URL,
  API_KEY,
};

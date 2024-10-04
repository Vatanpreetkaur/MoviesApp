import { BASE_URL } from "../config/apiConfig";
import { API_KEY } from "../config/apiConfig";
import axios from 'axios';


 const fetchSearchResults = async (movie, searchType, setResults, setError) => {
    const url = BASE_URL; // Replace with your actual API key
    try {
        const response = await fetch(`${BASE_URL}/search/${searchType}?api_key=${API_KEY}&query=${encodeURIComponent(movie)}`);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            setResults(data.results); // Update results with movie data
        } else {
            setError("No results found");
        }
    } catch (error) {
        console.error(error);
        setError("An error occurred while fetching data");
    }
};

const fetchMovies = async (category, setMovies) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${category}`, {
        params: {
          api_key: API_KEY,
        },
      });

      // Log the API response to debug
      console.log('Movies API Response:', response.data.results);

      // Set movie data from API response
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };


const fetchTvShows = async (category, setTvShows) => {
    try {
      const response = await axios.get(`${BASE_URL}/tv/${category}`, {
        params: {
          api_key: API_KEY,
        },
      });

      // Log the API response to debug
      console.log('TV Shows API Response:', response.data.results);

      // Set TV show data from API response
      setTvShows(response.data.results);
    } catch (error) {
      console.error('Error fetching TV shows:', error);
    }
  };
  export { fetchMovies, fetchTvShows, fetchSearchResults}

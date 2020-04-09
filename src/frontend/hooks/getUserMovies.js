// hooks.js
import { useState, useEffect } from 'react';
import axios from 'axios';

function getUserMovies(listOfUserMovies) {
  console.log(listOfUserMovies);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovie = (id) => {
    return axios.get(`/movies/${id}`);
  };
  async function fetchUrl() {
    const response = await listOfUserMovies.map(movie => getMovie(movie.movieId));

    const json = await Promise.all(response);
    setData(json);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}
export default getUserMovies;

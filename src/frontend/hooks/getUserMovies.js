/* eslint-disable implicit-arrow-linebreak */
// hooks.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserMovies } from '../actions';

const getMovie = (_id, id) =>
  axios.get(`/movies/${id}`, {
    transformResponse: [(data) => {
      const movie = JSON.parse(data);
      movie.data.userMovieId = _id;
      return movie.data;
    },
    ],
  });

function getUserMovies(listOfUserMovies) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchMovies() {
    const response = await listOfUserMovies.map(movie => getMovie(movie._id, movie.movieId));
    const all = await axios.all(response);
    // const json = await Promise.all(response);
    dispatch(setUserMovies(all));
    setData(all);
    setLoading(false);
  }
  useEffect(() => {
    fetchMovies();
  }, []);
  return [data, loading];
}
export default getUserMovies;

/* eslint-disable implicit-arrow-linebreak */
// hooks.js
import axios from 'axios';

const getMovie = (_id, id) =>
  axios.get(`/movies/${id}`, {
    transformResponse: [
      (data) => {
        const movie = JSON.parse(data);
        movie.data.userMovieId = _id;
        return movie.data;
      }],
  });

const getUserMovies = async (listOfUserMovies) => {
  const response = await listOfUserMovies.map(movie => getMovie(movie._id, movie.movieId));
  const all = await axios.all(response);

  return all;
};
export default getUserMovies;

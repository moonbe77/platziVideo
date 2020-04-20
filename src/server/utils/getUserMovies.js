/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';
import { config } from '../config';

require('dotenv').config();

const getMovie = (token, _id, id) =>
  axios({
    url: `${config.apiUrl}/api/movies/${id}`,
    headers: { Authorization: `Bearer ${token}` },
    method: 'get',
    transformResponse: [
      (data) => {
        const movie = JSON.parse(data);
        movie.data.userMovieId = _id;
        return movie.data;
      },
    ],
  }).catch(error => console.log(error));

async function getUserMovies(token, listOfUserMovies) {
  const response = await listOfUserMovies.map(movie =>
    getMovie(token, movie._id, movie.movieId),
  );
  const all = axios.all(response);
  return all;
}

export default getUserMovies;

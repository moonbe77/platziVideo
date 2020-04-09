import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const {
    _id,
    cover,
    title,
    year,
    contentRating,
    duration,
    isList,
    user,
  } = props;
  const { id: userId } = user;

  const handleSetFavorite = () => {
    const movieData = {
      _id,
      cover,
      title,
      year,
      contentRating,
      duration,
    };
    const userMovie = {
      movieId: movieData._id,
      userId,
    };
    console.log(userMovie);

    axios
      .post('/user-movies', userMovie)
      .then((res) => {
        console.log(res);
        props.setFavorite(movieData);
      })
      // eslint-disable-next-line arrow-parens
      .catch((error) => console.log(error));
  };

  const handleDeleteFavorite = (itemId) => {
    axios
      .delete(`/user-movies/${itemId}`)
      .then((res) => {
        console.log(res);
        props.deleteFavorite(itemId);
      })
      // eslint-disable-next-line arrow-parens
      .catch((error) => console.log(error));
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${_id}`}>
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
          </Link>
          {isList ? (
            <img
              className='carousel-item__details--img'
              src={removeIcon}
              alt='Plus Icon'
              onClick={() => handleDeleteFavorite(_id)}
            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={plusIcon}
              alt='Plus Icon'
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);

/* eslint-disable arrow-parens */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';
import { addUserMovie, removeUserMovie } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';
import Spinner from './Spinner';

const CarouselItem = props => {
  // eslint-disable-next-line no-unused-vars
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

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

  const handleSetFavorite = () => {
    //MOVE ALL THIS TO REDUX ACTIONS
    const { id: userId } = user;
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

    axios
      .post('/user-movies', userMovie)
      .then(res => {
        const userMovieId = res.data.data;
        movieData['userMovieId'] = userMovieId;
        props.addUserMovie(movieData);
      })
      // eslint-disable-next-line arrow-parens
      .catch(error => console.log(error));
  };

  const handleDeleteFavorite = itemId => {
    axios
      .delete(`/user-movies/${itemId}`)
      .then(res => {
        props.removeUserMovie(res.data.data);
      })
      // eslint-disable-next-line arrow-parens
      .catch(error => console.log(error));
  };

  return (
    <div className='carousel-item'>
      {!isImgLoaded && <Spinner /> }
      <animated.img
        className='carousel-item__img'
        style={fade}
        src={cover}
        alt={title}
        onLoad={() => { setIsImgLoaded(true); }}
      />
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
              onClick={() => handleDeleteFavorite(props.userMovieId)}
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
  addUserMovie,
  removeUserMovie,
};

export default connect(null, mapDispatchToProps)(CarouselItem);

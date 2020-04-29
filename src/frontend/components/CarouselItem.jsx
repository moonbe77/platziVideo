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
import film1 from '../assets/static/film1.jpg';
import film2 from '../assets/static/film2.jpg';
import film3 from '../assets/static/film3.jpg';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomImage = () => {
  const backgrounds = [film1, film2, film3];
  return backgrounds[getRandomInt(3)];
};
// eslint-disable-next-line no-unused-vars
const calc = (x, y) => {
  const xCalc = x / 10;
  const yCalc = -y / 10;

  return [yCalc, xCalc, 1.1];
};

const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const CarouselItem = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [isImgError, setIsImgError] = useState(false);
  //useSpring effects
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
  const [carouselItemStyle, setCarouselItemStyle] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const handleMouseMove = (e) => {
    //TODO: refactor this code to make more compact and reliable
    const viewportOffset = e.target.getBoundingClientRect(); //position of element from top left of the window

    //pos = {} === position of the mouse in relation to the element top left corner minus half of the
    // width to position the reference in the center of the element.
    const pos = {
      x: e.pageX - viewportOffset.left - viewportOffset.width / 2,
      y:
        e.pageY -
        viewportOffset.top -
        viewportOffset.height / 2 -
        window.scrollY,
    };

    setCarouselItemStyle({ xys: calc(pos.x, pos.y) });
  };

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
      .then((res) => {
        const userMovieId = res.data.data;
        movieData['userMovieId'] = userMovieId;
        props.addUserMovie(movieData);
      })
      // eslint-disable-next-line arrow-parens
      .catch((error) => console.log(error));
  };

  const handleDeleteFavorite = (itemId) => {
    axios
      .delete(`/user-movies/${itemId}`)
      .then((res) => {
        props.removeUserMovie(res.data.data);
      })
      // eslint-disable-next-line arrow-parens
      .catch((error) => console.log(error));
  };

  return (
    <animated.div
      className='carousel-item'
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setCarouselItemStyle({ xys: [0, 0, 1] })}
      style={{ transform: carouselItemStyle.xys.interpolate(trans) }}
    >
      {!isImgLoaded && <Spinner />}
      <animated.img
        className='carousel-item__img'
        style={fade}
        src={!isImgError ? cover : randomImage()}
        alt={title}
        onLoad={() => {
          setIsImgLoaded(true);
        }}
        onError={() => {
          setIsImgError(true);
        }}
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
    </animated.div>
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

/* eslint-disable array-callback-return */
/* eslint-disable arrow-parens */
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import getUserMovies from '../hooks/getUserMovies';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals, userMovies, user }) => {
  if (userMovies.length === 0) {
    console.log('User movies fetched from home component');
    getUserMovies(myList);
  }

  return (
    <>
      <Header />
      <Search isHome />
      <Categories title='Mi Lista'>
        {userMovies.length > 0 && (
          <Carousel>
            {userMovies.map(item => {
              const movie = item;
              return (
                <CarouselItem
                  key={movie.userMovieId}
                  {...movie}
                  user={user}
                  isList
                />
              );
            })}
          </Carousel>
        )}
      </Categories>
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map(item => (
            <CarouselItem key={item._id} {...item} user={user} />
          ))}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.map(item => (
            <CarouselItem key={item._id} {...item} user={user} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    userMovies: state.userMovies,
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Home);

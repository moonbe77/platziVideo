/* eslint-disable array-callback-return */
/* eslint-disable arrow-parens */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import { getUserMovies } from '../actions/index';
// import getUserMovies from '../hooks/getUserMovies';
import '../assets/styles/App.scss';

const Home = props => {
  const { myList, trends, originals, userMovies, user } = props;
  useEffect(() => {
    props.getUserMovies(myList);
  }, []);

  // if (userMovies.length === 0) {
  //   console.log('User Movies fetched from client');
  //   getUserMovies(myList);
  // }

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
const mapDispatchToProps = {
  getUserMovies,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

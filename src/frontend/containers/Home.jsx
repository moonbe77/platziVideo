/* eslint-disable array-callback-return */
/* eslint-disable arrow-parens */
import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  const userMovies = [];

  myList.map(item => {
    Axios.get(`/movies/${item.movieId}`)
      .then(data => {
        // console.log(data);
        userMovies.push(data.data);
      })
      .then(data => {
        console.log(userMovies);
      });
  });

  return (
    <>
      <Header />
      <Search isHome />
      {myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {myList.map(item => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.map(item => (
            <CarouselItem key={item.id} {...item} />
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
  };
};

export default connect(mapStateToProps, null)(Home);

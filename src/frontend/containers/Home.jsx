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

const Home = ({ myList, trends, originals, user }) => {
  const [data, loading] = getUserMovies(myList);
  console.log(data);
  return (
    <>
      <Header />
      <Search isHome />
      {myList.length > 0 &&
        (loading ? (
          <Categories title='Mi Lista'>CARGANDO</Categories>
        ) : (
          <Categories title='Mi Lista'>
            <Carousel>
              {myList.map((item) => (
                <CarouselItem key={item.id} {...item} user={user} isList />
              ))}
            </Carousel>
          </Categories>
        ))}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} user={user} />
          ))}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} user={user} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Home);

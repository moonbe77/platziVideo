/* eslint-disable arrow-parens */
import React from 'react';
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import Header from '../components/Header';

import '../assets/styles/Form.scss';
// eslint-disable-next-line arrow-parens
const CreateMovie = props => {
  const { register, handleSubmit, errors, setValue } = useForm();
  const onSubmit = data => {
    const movie = data;
    movie.tags = movie.tags.split(',');
    console.log(movie);
    Axios.post('/movies', movie)
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
  };
  console.log(errors);

  return (
    <>
      <Header />
      <section className='createMovie'>
        <div className='title'> CREAR MOVIE</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <button
            onClick={() => {
              const data = {
                title: 'La casa de papel',
                description:
                  "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor.",
                year: '2020',
                contentRating: 'pg',
                tags: 'serie, spanish',
                cover: 'http://google.com/search?tbm=isch&q=Money+Heist',
                source: 'https://www.netflix.com/au/title/80192098',
                duration: '120',
              };
              setValue('title', data.title);
              setValue('description', data.description);
              setValue('year', data.year);
              setValue('contentRating', data.contentRating);
              setValue('tags', data.tags);
              setValue('cover', data.cover);
              setValue('source', data.source);
              setValue('duration', data.duration);
            }}
            type='button'
          >
            fill form
          </button>
          <label htmlFor='title'>
            Title
            <input
              id='title'
              type='text'
              placeholder='title'
              name='title'
              ref={register({ required: true, max: 100, min: 2 })}
            />
          </label>
          <label htmlFor='description'>
            Description
            <input
              id='description'
              type='text'
              placeholder='description'
              name='description'
              ref={register({ max: 500, min: 50, maxLength: 500 })}
            />
          </label>
          <label htmlFor='year'>
            year
            <input
              id='year'
              type='text'
              placeholder='year'
              name='year'
              ref={register}
            />
          </label>
          <label htmlFor='contentRating'>
            content Rating
            <input
              id='contentRating'
              type='text'
              placeholder='contentRating'
              name='contentRating'
              ref={register}
            />
          </label>
          <label htmlFor='tags'>
            tags
            <input
              id='tags'
              type='text'
              placeholder='tags'
              name='tags'
              ref={register}
            />
          </label>
          <label htmlFor='cover'>
            cover
            <input
              id='cover'
              type='text'
              placeholder='cover'
              name='cover'
              ref={register}
            />
          </label>
          <label htmlFor='source'>
            source
            <input
              id='source'
              type='text'
              placeholder='source'
              name='source'
              ref={register}
            />
          </label>
          <label htmlFor='duration'>
            duration
            <input
              id='duration'
              type='text'
              placeholder='duration'
              name='duration'
              ref={register}
            />
          </label>

          <input type='submit' />
        </form>
      </section>
    </>
  );
};

export default CreateMovie;

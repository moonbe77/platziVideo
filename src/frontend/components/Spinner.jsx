/* eslint-disable no-await-in-loop */
import React from 'react';
// import { FaSpinner } from 'react-icons/fa';
// import { useSpring, animated } from 'react-spring';
import '../assets/styles/components/Spinner.scss';

const Spinner = () => {
  // const spin = useSpring({
  //   from: { transform: 'rotate(360deg)' },
  //   // to: { transform: 'rotate(360deg)' },
  //   to: async (next) => {
  //     while (1) {
  //       await next({ transform: 'rotate(360deg)' });
  //       await next({ transform: 'rotate(0deg)' });
  //     }
  //   },
  // });
  return (
    <svg
      className='spinner'
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 512 512'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z' />
    </svg>
  );
};

export default Spinner;

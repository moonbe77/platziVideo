import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/MockProvider';
import Carousel from '../Carousel';

describe('Carousel Component', () => {
  test('match Snapshot', () => {
    const carousel = create(
      <ProviderMock>
        <Carousel />
      </ProviderMock>,
    );
    expect(carousel.toJSON()).toMatchSnapshot();
  });
});

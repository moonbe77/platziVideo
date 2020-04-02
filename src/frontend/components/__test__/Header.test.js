import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/MockProvider';
import Header from '../Header';

describe('Header Component', () => {
  test('match Snapshot', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});

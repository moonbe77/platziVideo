import { setUserMovies, loginRequest, logoutRequest } from '../index';
import movieMock from '../../__mocks__/movieMock';

describe('Redux Actions', () => {
  it('setUserMovies', () => {
    const payload = movieMock;
    const expected = {
      type: 'SET_USER_MOVIES',
      payload,
    };
    expect(setUserMovies(payload)).toEqual(expected);
  });

  it('LOGIN_REQUEST ', () => {
    const payload = {
      email: 'pepe@ramon.com',
      password: 'un password ',
    };
    const expected = {
      type: 'LOGIN_REQUEST',
      payload,
    };
    expect(loginRequest(payload)).toEqual(expected);
  });

  it('LOGIN_REQUEST ', () => {
    const payload = {};
    const expected = {
      type: 'LOGOUT_REQUEST',
      payload,
    };
    expect(logoutRequest(payload)).toEqual(expected);
  });
});

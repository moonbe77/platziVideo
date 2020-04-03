import { setFavorite, loginRequest, logoutRequest } from '../index';
import movieMock from '../../__mocks__/movieMock';

describe('Redux Actions', () => {
  it('setFavorite', () => {
    const payload = movieMock;
    const expected = {
      type: 'SET_FAVORITE',
      payload,
    };
    expect(setFavorite(payload)).toEqual(expected);
  });

  it('LOGIN_REQUEST ', () => {
    const payload = {
      email: 'pepe@ramon.com',
      password: 'unpaswordde pueba',
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

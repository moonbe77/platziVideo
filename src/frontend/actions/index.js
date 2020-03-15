/* eslint-disable arrow-parens */
import axios from 'axios';

export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const setError = payload => ({
  type: 'SET_ERROR',
  payload,
});

export const getVideoSource = payload => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});

export const registerUser = (payload, redirectUrl) => {
  return dispatch => {
    axios
      .post('/auth/sign-up', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        console.log(`REDIRECT URL>> ${redirectUrl}`);
        window.location.href = redirectUrl;
      })
      .catch(err => dispatch(setError(err)));
  };
};

export const loginUser = ({ email, password }, redirectUrl) => {
  return dispatch => {
    axios({
      url: '/auth/sign-in',
      method: 'post',
      auth: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        const { email, name, id } = data.user;
        document.cookie = `email=${email}`;
        document.cookie = `name=${name}`;
        document.cookie = `id=${id}`;
        document.cookie = `token=${data.token}`;
      })
      .then(() => {
        console.log(`REDIRECT URL>> ${redirectUrl}`);
        window.location.href = redirectUrl;
      })
      .catch(err => dispatch(setError(err)));
  };
};

export const loginByGoogle = redirectUrl => {
  return dispatch => {
    axios({
      url: '/auth/google',
      method: 'post',
      auth: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        const { email, name, id } = data.user;
        document.cookie = `email=${email}`;
        document.cookie = `name=${name}`;
        document.cookie = `id=${id}`;
        document.cookie = `token=${data.token}`;
      })
      .then(() => {
        console.log(`REDIRECT URL>> ${redirectUrl}`);
        window.location.href = redirectUrl;
      })
      .catch(err => dispatch(setError(err)));
  };
};

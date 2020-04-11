const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'SET_USER_MOVIES':
      return {
        ...state,
        userMovies: action.payload.map(data => data.data),
      };
    case 'ADD_USER_MOVIE':
      return {
        ...state,
        userMovies: [...state.userMovies, action.payload],
      };
    case 'REMOVE_USER_MOVIE':
      return {
        ...state,
        userMovies: state.userMovies.filter(items => items.userMovieId !== action.payload),
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing:
          state.trends.find(item => item.id === action.payload) ||
          state.originals.find(item => item.id === action.payload) ||
          [],
      };
    default:
      return state;
  }
};

export default reducer;

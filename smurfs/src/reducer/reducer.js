import { GET_SMURF_DATA, LOADING, POST_SMURF } from "../actions/actions";

export const initialState = {
  isFetching: false,
  smurfData: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isFetching: true,
      };
    case GET_SMURF_DATA:
      return {
        ...state,
        isFetching: false,
        smurfData: action.payload,
      };
    case POST_SMURF:
      return {
        ...state,
        smurfData: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

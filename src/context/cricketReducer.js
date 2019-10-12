import {
  GET_DATA,
  CHANGE_TYPE,
  CHANGE_STATUS,
  GET_SERIES,
  GET_SERIES_LISTING
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_SERIES_LISTING: {
      return {
        ...state,
        seriesListing: action.payload,
        loading: false
      };
    }
    case CHANGE_TYPE: {
      return {
        ...state,
        type: action.payload,
        loading: true
      };
    }
    case CHANGE_STATUS: {
      return {
        ...state,
        status: action.payload,
        loading: true
      };
    }
    default:
      return state;
  }
};

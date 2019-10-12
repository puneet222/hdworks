import {
  GET_DATA,
  CHANGE_TYPE,
  CHANGE_STATUS,
  GET_SERIES,
  GET_SERIES_LISTING,
  SET_CURRENT_SERIES,
  GET_MATCH_LIST
} from "./types";

export default (state, action) => {
  console.log(action.type);
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
    case SET_CURRENT_SERIES: {
      return {
        ...state,
        currentSeries: action.payload,
        loading: true
      };
    }
    case GET_MATCH_LIST: {
      return {
        ...state,
        matches: action.payload,
        loading: false
      };
    }
    default:
      return state;
  }
};

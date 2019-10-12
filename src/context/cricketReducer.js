import { GET_DATA, CHANGE_TYPE, CHANGE_STATUS, GET_SERIES } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        type: "ALL"
      };
    }
    case GET_SERIES: {
      console.log("here");
      console.log(action.payload);
      return {
        ...state,
        series: action.payload
      };
    }
    case CHANGE_TYPE: {
      return {
        ...state,
        type: action.payload
      };
    }
    case CHANGE_STATUS: {
      return {
        ...state,
        status: action.payload
      };
    }
    default:
      return state;
  }
};

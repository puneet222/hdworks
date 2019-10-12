import { GET_DATA, CHANGE_TYPE, CHANGE_STATUS } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        type: "ALL"
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

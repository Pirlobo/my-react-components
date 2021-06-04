import types from "../util/ActionTypes";

const { SET_WHERE_FROM, SET_WHERE_TO } = types;

const initialState = {
    whereTo : "",
    whereFrom : ""
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WHERE_FROM:
        return {
          ...state,
          whereFrom: action.payload,
        };
    case SET_WHERE_TO:
      return {
        ...state,
        whereTo: action.payload,
      };
    default:
      return state;
  }
};

export default classReducer;

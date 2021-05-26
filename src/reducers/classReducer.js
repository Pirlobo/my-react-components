import types from "../util/ActionTypes";

const { SET_CLASS } = types;

const initialState = {
    class : "Economy"
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLASS:
      return {
        ...state,
        class: action.payload,
      };
    default:
      return state;
  }
};

export default classReducer;

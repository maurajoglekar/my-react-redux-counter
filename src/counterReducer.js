import * as types from "./actionTypes";

const initialState = {
  value: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return { value: state.value + 1 };
    case types.DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export default counterReducer;

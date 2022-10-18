const initialState = { counter: 10 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, counter: state.counter + Number(action.data) };
    }

    case "DECREMENT": {
      return { ...state, counter: state.counter - Number(action.data) };
    }

    default: {
      return state;
    }
  }
};

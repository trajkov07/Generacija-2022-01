const initialState = { creditRating: 5 };

export const creditReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_CREDIT": {
      return { ...state, creditRating: Number(action.payload) };
    }

    default: {
      return state;
    }
  }
};

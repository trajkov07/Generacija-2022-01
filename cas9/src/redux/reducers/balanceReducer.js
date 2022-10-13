const initialState = { balance: 100 };

export const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT": {
      return { ...state, balance: state.balance + Number(action.payload) };
    }
    case "WITHDRAW": {
      return { ...state, balance: state.balance - Number(action.payload) };
    }

    default: {
      return state;
    }
  }
};

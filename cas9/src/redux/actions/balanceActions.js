export const depositBalance = (value) => {
  return {
    type: "DEPOSIT",
    payload: value,
  };
};

export const depositBalanceAsync = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      console.log("Dispatching asyncronius");
      dispatch(depositBalance(value));
    }, 3000);
  };
};

export const withdrawBalance = (value) => {
  return {
    type: "WITHDRAW",
    payload: value,
  };
};

// PAUZA DO 19:57

export const incrementCounter = (value) => {
  return {
    type: "INCREMENT",
    data: value,
  };
};

export const incrementCounterAsync = (value) => {
  // ovde za asinhrono se misli koga treba da cekame nekoj response
  // od nesto (bilo toa da e api ili nekoja druga asinhrona akcija)
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
      dispatch("State")
    );
  };
};

export const decrementCounter = (value) => {
  return {
    type: "DECREMENT",
    data: value,
  };
};

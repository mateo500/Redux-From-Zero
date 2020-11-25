const incrementAction = () => ({ type: "INC" });
const decrementAction = () => ({ type: "DEC" });

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "DEC":
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

export default reducer;
export { incrementAction, decrementAction };

import { useReducer } from "react";
import { initialState, reducer } from "../provider";

const PvdHome = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>PvdHome</h1>
      <div>counter: {state.count}</div>

      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
};

export default PvdHome;

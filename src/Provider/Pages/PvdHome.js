import { useReducer, useRef } from "react";
import { initialState, reducer } from "../provider";

const PvdHome = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inputRef = useRef();

  return (
    <>
      <h1>PvdHome</h1>
      <div>counter: {state.count}</div>
      <input ref={inputRef} />
      <hr />

      <button
        onClick={() =>
          dispatch({ type: "decrement", payload: inputRef.current.value })
        }
      >
        -
      </button>
      <button
        onClick={() =>
          dispatch({ type: "increment", payload: inputRef.current.value })
        }
      >
        +
      </button>
    </>
  );
};

export default PvdHome;

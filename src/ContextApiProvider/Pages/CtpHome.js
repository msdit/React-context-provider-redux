import { useContext } from "react";
import CounterContext from "../Context";

const CtpHome = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <>
      <h1>CtpHome</h1>
      <div>counter: {state?.counter}</div>

      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
};

export default CtpHome;

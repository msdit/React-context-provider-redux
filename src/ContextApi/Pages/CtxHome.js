import { useContext } from "react";
import CounterContext from "../Context";

const CtxHome = () => {
  const { counter } = useContext(CounterContext);
  return (
    <>
      <h1>CtxHome</h1>
      <div>counter: {counter}</div>
    </>
  );
};

export default CtxHome;

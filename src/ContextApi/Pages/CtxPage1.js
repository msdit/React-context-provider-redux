import { useContext } from "react";
import CounterContext from "../Context";

const CtxPage1 = () => {
  const { counter } = useContext(CounterContext);
  return (
    <>
      <h1>CtxPage1</h1>
      <div>counter: {counter}</div>
    </>
  );
};

export default CtxPage1;

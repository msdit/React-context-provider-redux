import { useContext } from "react";
import CounterContext from "../Context";

const CtpPage1 = () => {
  const { state } = useContext(CounterContext);
  return (
    <>
      <h1>CtpPage1</h1>
      <div>counter: {state?.counter}</div>
    </>
  );
};

export default CtpPage1;

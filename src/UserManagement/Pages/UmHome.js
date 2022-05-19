import { useContext } from "react";
import CounterContext from "../Context";
import Table from "../Components/Table";

const UmHome = () => {
  const { state } = useContext(CounterContext);
  return (
    <>
      <h1>UmHome</h1>
      <Table list={state} />
    </>
  );
};

export default UmHome;

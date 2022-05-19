import { useContext } from "react";
import UserContext from "../Context";
import Table from "../Components/Table";

const UmHome = () => {
  const { state } = useContext(UserContext);
  return (
    <>
      <h1>UmHome</h1>
      <Table list={state} />
    </>
  );
};

export default UmHome;

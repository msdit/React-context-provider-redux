import { useContext } from "react";
import UserContext from "../../Context";

const TableItem = ({ name, id }) => {
  const { dispatch } = useContext(UserContext);
  return (
    <>
      <div>
        <span
          onClick={() => {
            dispatch({ type: "removeUser", payload: id });
          }}
          style={{ color: "red", fontSize: 12, cursor: "pointer" }}
        >
          [delete]
        </span>{" "}
        {name}
      </div>
      <hr />
    </>
  );
};

export default TableItem;

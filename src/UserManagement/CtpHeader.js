import { Link } from "react-router-dom";

const CtxHeader = () => {
  return (
    <>
      <span>User Management: </span>
      <Link to="/um">List</Link> | <Link to="/um/add">Add</Link>
      <hr />
    </>
  );
};

export default CtxHeader;

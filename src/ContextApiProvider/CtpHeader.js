import { Link } from "react-router-dom";

const CtxHeader = () => {
  return (
    <>
      <span>Context Api + Provider: </span>
      <Link to="/ctp">Home</Link> | <Link to="/ctp/page1">Page1</Link>
      <hr />
    </>
  );
};

export default CtxHeader;

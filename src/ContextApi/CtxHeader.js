import { Link } from "react-router-dom";

const CtxHeader = () => {
  return (
    <>
      <span>Context Api: </span>
      <Link to="/ctx">Home</Link> | <Link to="/ctx/page1">Page1</Link>
      <hr />
    </>
  );
};

export default CtxHeader;

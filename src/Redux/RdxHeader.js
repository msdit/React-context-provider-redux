import { Link } from "react-router-dom";

const RdxHeader = () => {
  return (
    <>
      <span>Redux: </span>
      <Link to="/rdx">Home</Link> | <Link to="/rdx/page1">Page1</Link>
      <hr />
    </>
  );
};

export default RdxHeader;

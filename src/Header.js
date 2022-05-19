import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="ctx">Context Api</Link> |{" "}
      <Link to="pvd">Provider</Link> |{" "}
      <Link to="ctp">Context Api + Provider</Link> |{" "}
      <Link to="um">User Management</Link> | <Link to="rdx">Redux</Link>
      <hr />
    </>
  );
};

export default Header;

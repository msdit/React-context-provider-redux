import { useSelector } from "react-redux";
import { selectCount } from "../redux/reducer/counterReducer";

const RdxPage1 = () => {
  const count = useSelector(selectCount);
  return (
    <>
      <h1>RdxPage1</h1>
      <div>count: {count}</div>
    </>
  );
};

export default RdxPage1;

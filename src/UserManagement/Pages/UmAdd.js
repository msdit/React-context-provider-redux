import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context";

const UmAdd = () => {
  const { dispatch } = useContext(UserContext);
  const inputRef = useRef();
  const navigate = useNavigate();

  const addUser = () => {
    const payload = inputRef.current.value;

    if (payload.length > 0) {
      dispatch({ type: "addUser", payload });
      navigate("/um");
    }
  };

  return (
    <>
      <h1>UmAdd</h1>
      <div>
        <input ref={inputRef} />
        <button onClick={addUser}>Add</button>
      </div>
    </>
  );
};

export default UmAdd;

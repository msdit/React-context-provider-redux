import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import CounterContext from "./Context";
import { initialState, reducer } from "./Context/reducer";
import CtpHeader from "./CtpHeader";
import UmHome from "./Pages/UmHome";
import UmAdd from "./Pages/UmAdd";

const UserManagementRoutes = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <CtpHeader />
      <Routes>
        <Route index element={<UmHome />} />
        <Route path="add" element={<UmAdd />} />
      </Routes>
    </CounterContext.Provider>
  );
};

export default UserManagementRoutes;

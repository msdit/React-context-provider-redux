import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "./Context";
import { initialState, reducer } from "./Context/reducer";
import CtpHeader from "./CtpHeader";
import UmHome from "./Pages/UmHome";
import UmAdd from "./Pages/UmAdd";

const UserManagementRoutes = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <CtpHeader />
      <Routes>
        <Route index element={<UmHome />} />
        <Route path="add" element={<UmAdd />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default UserManagementRoutes;

import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import CounterContext from "./Context";
import { initialState, reducer } from "./Context/reducer";
import CtpHeader from "./CtpHeader";
import CtpHome from "./Pages/CtpHome";
import CtpPage1 from "./Pages/CtpPage1";

const ContextApiProviderRoutes = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <CtpHeader />
      <Routes>
        <Route index element={<CtpHome />} />
        <Route path="page1" element={<CtpPage1 />} />
      </Routes>
    </CounterContext.Provider>
  );
};

export default ContextApiProviderRoutes;

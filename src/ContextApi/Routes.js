import { Route, Routes } from "react-router-dom";
import CounterContext from "./Context";
import CtxHeader from "./CtxHeader";
import CtxHome from "./Pages/CtxHome";
import CtxPage1 from "./Pages/CtxPage1";

const initialState = {
  counter: 100,
};

const ContextApiRoutes = () => {
  return (
    <CounterContext.Provider value={initialState}>
      <CtxHeader />
      <Routes>
        <Route index element={<CtxHome />} />
        <Route path="page1" element={<CtxPage1 />} />
      </Routes>
    </CounterContext.Provider>
  );
};

export default ContextApiRoutes;

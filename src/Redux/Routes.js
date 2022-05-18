import { Route, Routes } from "react-router-dom";
import RdxHome from "./Pages/RdxHome";
import RdxPage1 from "./Pages/RdxPage1";
import RdxHeader from "./RdxHeader";
import store from "./redux/store";
import { Provider } from "react-redux";

const ReduxRoutes = () => {
  return (
    <Provider store={store}>
      <RdxHeader />
      <Routes>
        <Route index element={<RdxHome />} />
        <Route path="page1" element={<RdxPage1 />} />
      </Routes>
    </Provider>
  );
};

export default ReduxRoutes;

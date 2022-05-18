import { Route, Routes } from "react-router-dom";
import PvdHome from "./Pages/PvdHome";

const ProviderRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<PvdHome />} />
      </Routes>
    </>
  );
};

export default ProviderRoutes;

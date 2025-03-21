import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/\bHome";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

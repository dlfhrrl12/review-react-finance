import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="container flex flex-col justify-center p-8 text-center mx-auto">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/detail/:id"} element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;

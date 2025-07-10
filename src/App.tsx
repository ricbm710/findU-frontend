//rrd
import { Route, Routes } from "react-router";
//css
import "./App.css";
//layouts
import MainLayout from "./layouts/MainLayout";
//pages
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

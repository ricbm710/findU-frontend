//rrd
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <div className="bg-prussian-blue text-white">Navbar</div>
      <Outlet />
      <div className="bg-air-superiority-blue text-white">Footer</div>
    </>
  );
};

export default MainLayout;

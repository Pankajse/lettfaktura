import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";


export const LoginLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};



export const DashboardLayout = () => {
  return (
    <div className="dashboard-container" style={{ display: "flex" }}>
      <SideMenu />
      <div style={{ flex: 1 }}>
        <Header />
        <main>
            <Outlet />
        </main>
      </div>
    </div>
  );
};


import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import './styles/Layout.css';
import { useState } from "react";


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
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="Layout-container">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div style={{display: "flex"}}>
        <SideMenu sidebarOpen={sidebarOpen} />
        <Outlet />
      </div>
    </div>
  );
};

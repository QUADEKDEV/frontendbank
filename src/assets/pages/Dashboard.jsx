import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";
const Dashboard = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="dashboard">
      <button class="menu-toggle" id="menuToggle" onClick={() => setActive(!active)}>
        <i class="fas fa-bars"></i>
      </button>
      <div className={active ? "sidebar active" : "sidebar"}>
        <Sidebar />
      </div>
      <div className="main-content">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

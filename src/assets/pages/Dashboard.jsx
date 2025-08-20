import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="main-content">
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;

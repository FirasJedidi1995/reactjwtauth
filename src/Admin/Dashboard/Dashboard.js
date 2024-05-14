import React from "react";
import Sidebar from "../SideBar/Sidebar";
import "./dashboard.css";
import Content from "./Content";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;

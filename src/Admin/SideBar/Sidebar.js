import React from "react";
import {
  BiBookAlt,
  BiHelpCircle,
  BiHome,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiTask,
} from "react-icons/bi";
import "../SideBar/sidebar.css";

const Sidebar = () => {
  return (
    <div className="=menu">
      <div className="logo">
        <BiBookAlt className="logo-icon" />
        <h2>Espace Admin</h2>
      </div>
      <div className="menu--list">
        <a href="#" className="item active">
          <BiHome className="icon" />
          Home
        </a>
        <a href="#" className="item">
          <BiTask className="icon" />
          Gestion utilisateurs
        </a>
        <a href="#" className="item">
          <BiSolidReport className="icon" />
          Gestion villes
        </a>
        <a href="#" className="item">
          <BiStats className="icon" />
          Gestion regions
        </a>
        <a href="#" className="item">
          <BiMessage className="icon" />
          Gestion offres
        </a>
        <a href="#" className="item">
          <BiHelpCircle className="icon" />
          Gestion options
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

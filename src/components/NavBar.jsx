import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  Settings,
  LogOut,
  Sparkles,
  Folder,
  Clock,
  Star,
  BookOpen,
  Crown,
  Menu,
  X,
  Presentation,
  Code,
} from "lucide-react";
import { axiosInstance } from "../context/axios";
import endpoints from "../endpoints/endpoints";

const styles = {
  container:
    "fixed top-0 left-0 overflow-auto bg-white/10 md:bg-white backdrop-blur-md  w-[250px] md:w-[300px] transition-all duration-300 transform z-40 border-r border-neutral-200", 
  mobileContainer:
    "fixed top-0 left-0 h-full bg-white/10 shadow-lg w-[250px] transition-all duration-300 transform -translate-x-full",
  subcontainer: "flex flex-col p-4 gap-2",
  logo: "text-2xl font-bold mb-8 text-center text-neutral-900",
  links:
    "flex  items-center gap-3 p-2 rounded-lg text-neutral-900 hover:bg-gray-200 active:ring-2 active:ring-gray-700 transition duration-300 ease-in-out",
  sectionTitle: "text-sm font-semibold text-neutral-500 px-4 mt-6 mb-2",
  upgradeContainer: "bg-gradient-to-r from-neutral-900 to-neutral-800 m-2 p-4 rounded-lg text-white",
  upgradeButton: "mt-3 w-full bg-white text-neutral-900 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all",
  menuButton:
    "md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-md",
  overlay: "md:hidden fixed inset-0 bg-opacity-50 z-0",
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleSidebar} className={styles.menuButton}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}

      <div
        className={`${styles.container} ${
          !isOpen ? "md:translate-x-0 -translate-x-full" : "translate-x-0"
        } ${isOpen ? "" : "md:relative"}`}
      >
        <div className={styles.subcontainer}>
          <h1 className={styles.logo}>AI-Notes</h1>
        </div>
        <div className={styles.subcontainer}>
          <Link
            className={styles.links}
            to="/"
            onClick={() => setIsOpen(false)}
          >
            <Home size={20} /> Home
          </Link>
          <Link
            className={styles.links}
            to="/ai-notes"
            onClick={() => setIsOpen(false)}
          >
            <Sparkles size={20} /> AI Generated Notes
          </Link>
          <Link
            className={styles.links}
            to="/workspace"
            onClick={() => setIsOpen(false)}
          >
            <LayoutDashboard size={20} /> My Workspace
          </Link>
          <Link
            className={styles.links}
            to="/ppt"
            onClick={() => setIsOpen(false)}
          >
            <Presentation size={20} /> Presentations
          </Link>
          <Link
            className={styles.links}
            to="/programming"
            onClick={() => setIsOpen(false)}
          >
            <Code size={20} /> Programming
          </Link>
          <Link
            className={styles.links}
            to="/favorites"
            onClick={() => setIsOpen(false)}
          >
            <Star size={20} /> Favorites
          </Link>
          <div className="bg-gray-200 w-full h-[0.5px]"/>
          <h2 className={styles.sectionTitle}>MY LIBRARY</h2>
          
          <Link
            className={styles.links}
            to="/folders"
            onClick={() => setIsOpen(false)}
          >
            <Folder size={20} /> My Folders
          </Link>
          <Link
            className={styles.links}
            to="/recent"
            onClick={() => setIsOpen(false)}
          >
            <Clock size={20} /> Recent Notes
          </Link>
          <Link
            className={styles.links}
            to="/settings"
            onClick={() => setIsOpen(false)}
          >
            <Settings size={20} /> Settings
          </Link>

          {/* <div className={styles.upgradeContainer}>
            <div className="flex items-center gap-2">
              <Crown size={20} />
              <span className="font-semibold">Upgrade to Pro</span>
            </div>
            <p className="text-sm mt-2">Unlock all features and AI-Powered note generation</p>
            <button className={styles.upgradeButton}>
              Upgrade Now
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
"use client";
import { Menu, X } from "lucide-react";
import Menubar from "./Menubar";
import { useState } from "react";

const MobileMenu = () => {
  const [isClosed, setIsClosed] = useState(true);
  return (
    <div className="drawer">
      <input
        onChange={() => setIsClosed(!isClosed)}
        id="mobile-menu"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        <label
          htmlFor="mobile-menu"
          className="swap drawer-button swap-rotate cursor-pointer "
        >
          <input type="checkbox" />
          <Menu className={`${isClosed ? "swap-off" : "swap-on"}`} />
          <X className={`${isClosed ? "swap-on" : "swap-off"}`} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="mobile-menu"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="min-h-full w-80 bg-base-200 p-4 text-base-content">
          {/* Sidebar content here */}
          <Menubar />
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

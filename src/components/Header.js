import React from "react";
import { FaUserCircle } from "react-icons/fa";

import NavBar from "./NavBar";

export default function Header() {
  let menu = [
    { label: "Home", route: "/" },
    { label: "About", route: "/about" },
  ];

  return (
    <header>
      <div className="header-container">
        <NavBar menuData={menu} />
        <FaUserCircle className="user-icon" />
      </div>
    </header>
  );
}

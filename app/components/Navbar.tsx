"use client";
import { useState } from "react";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Search */}
      <div className="search-box">
        <FaSearch className="icon" />
        <input type="text" placeholder="Search..." />
      </div>

      {/* Right Section */}
      <div className="nav-right">
        {/* Bell */}
        <div className="bell">
          <FaBell />
          <span className="badge">3</span>
        </div>

        {/* Profile */}
        <div className="profile" onClick={() => setOpen(!open)}>
          <FaUserCircle size={28} />
          {open && (
            <div className="dropdown">
              <p>My Profile</p>
              <p>Settings</p>
              <p>Logout</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
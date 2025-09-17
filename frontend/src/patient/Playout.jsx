import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../patient/playout.css";

const PatientLayout = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Example: Assume user name is stored in localStorage after login
  const userName = localStorage.getItem("userName") || "Patient User";
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOD3wkF-ERr3Hp2GDnxrbua9rAp0-Xyb9BHg&s" width={125} height={45}/>
        </div>
        <ul className="nav-links">
          <li><Link to="/patient-home/dashboard-patient">Dashboard</Link></li>
          <li><Link to="/patient-home/therapists-patient">Therapist</Link></li>
          <li><Link to="/patient-home/schedule-patient">Schedule</Link></li>
          <li><Link to="/patient-home/progress-patient">Progress</Link></li>
          <li><Link to="/patient-home/feedback-patient">Feedback</Link></li>
          <li><Link to="/patient-home/contact-patient">Contact</Link></li>
        </ul>

        {/* User initials with dropdown */}
        <div className="user-menu" ref={dropdownRef}>
          <div
            className="user-initials"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {initials}
          </div>
          {dropdownOpen && (
            <div className="dropdown">
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          )}
        </div>
      </nav>

      {/* Outlet will render the child page */}
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
};

export default PatientLayout;

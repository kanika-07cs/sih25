import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../patient/phome.css";

const PatientLayout = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Panchakarma</div>
        <ul className="nav-links">
          <li><Link to="/dashboard-patient">Dashboard</Link></li>
          <li><Link to="/therapists-patient">Therapist</Link></li>
          <li><Link to="/schedule-patient">Schedule</Link></li>
          <li><Link to="/progress-patient">Progress</Link></li>
          <li><Link to="/feedback-patient">Feedback</Link></li>
          <li><Link to="/contact-patient">Contact</Link></li>
        </ul>
      </nav>

      {/* Outlet will render the child page */}
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
};

export default PatientLayout;
import React, { useState, useEffect } from "react";
import "../patient/phome.css";

const PatientHome = () => {
  const [patientName, setPatientName] = useState("Priya");
  const [upcomingSessions, setUpcomingSessions] = useState([
    { id: 1, date: "2025-09-20", type: "Panchakarma Therapy", status: "Scheduled" },
    { id: 2, date: "2025-09-25", type: "Abhyanga Massage", status: "Scheduled" },
  ]);
  const [healthProgress, setHealthProgress] = useState([
    { week: 1, score: 60 },
    { week: 2, score: 65 },
    { week: 3, score: 70 },
    { week: 4, score: 80 },
  ]);

  return (
    <div className="patient-home-container">

      {/* HOME SECTION */}
      <section id="home" className="dashboard-header">
        <h1>Welcome, {patientName}</h1>
      </section>
      
    </div>
  );
};

export default PatientHome;

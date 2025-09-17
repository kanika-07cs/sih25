import React, { useState } from "react";

const PatientDashboard = () => {
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
    <div>
      <h1>Welcome, {patientName}</h1>

      <section id="dashboard" className="dashboard-section">
        <h2>Upcoming Sessions</h2>
        <div className="sessions-list">
          {upcomingSessions.map((session) => (
            <div key={session.id} className="session-card">
              <h3>{session.type}</h3>
              <p>Date: {session.date}</p>
              <p>Status: {session.status}</p>
            </div>
          ))}
        </div>

        <h2>Health Progress</h2>
        <div className="progress-bars">
          {healthProgress.map((week) => (
            <div key={week.week} className="progress-bar">
              <span>Week {week.week}</span>
              <div className="progress-container" style={{ border: "1px solid #ccc", width: "100%", height: "20px", borderRadius: "5px" }}>
                <div
                  className="progress-fill"
                  style={{
                    width: `${week.score}%`,
                    backgroundColor: "#4caf50",
                    height: "100%",
                    textAlign: "center",
                    color: "white",
                    borderRadius: "5px"
                  }}
                >
                  {week.score}%
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2>Quick Actions</h2>
        <div className="actions">
          <button onClick={() => alert("Book Session clicked")}>Book Session</button>
          <button onClick={() => alert("View Summary clicked")}>View Summary</button>
          <button onClick={() => alert("Notifications clicked")}>Notifications</button>
        </div>
      </section>
    </div>
  );
};

export default PatientDashboard;

import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import "../patient/pdashboard.css";

export default function PDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [symptoms, setSymptoms] = useState("");
  const [concerns, setConcerns] = useState([]);
  const concernOptions = [
    "Stress & Anxiety",
    "Digestive Issues",
    "Sleep Problems",
    "Joint Pain",
    "Headaches",
    "Skin Issues",
    "Back Pain",
    "Fatigue",
  ];

  const handleConcernClick = (concern) => {
    if (!concerns.includes(concern)) {
      setConcerns([...concerns, concern]);
    }
  };

  return (
    <div className="dashboard-wrapper">

      {/* Main Dashboard */}
      <div className="dashboard-content">
        {/* Greeting & Stats */}
        <div className="greeting-box">
          <h2>Hello, Priya</h2>
          <p>Track your Panchakarma journey with ease.</p>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>12</h3>
              <p>Sessions Completed</p>
            </div>
            <div className="stat-card">
              <h3>3</h3>
              <p>Active Therapists</p>
            </div>
            <div className="stat-card">
              <h3 className="progress">75%</h3>
              <p>Treatment Progress</p>
            </div>
          </div>
        </div>

        <div className="main-grid">
          {/* How are you feeling today */}
          <div className="feeling-box">
            <h3>How are you feeling today?</h3>
            <textarea
              placeholder="Describe your symptoms, concerns, or how you're feeling..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
            <div className="concerns">
              <p>Common concerns:</p>
              <div className="tags">
                {concernOptions.map((c) => (
                  <span
                    key={c}
                    className={`tag ${concerns.includes(c) ? "selected" : ""}`}
                    onClick={() => handleConcernClick(c)}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Schedule & Alerts */}
          <div className="schedule-box">
            <h3>Schedule & Alerts</h3>
            <div className="tabs">
              <button className="active">Upcoming Sessions</button>
              <button>Calendar View</button>
            </div>
            <div className="session-card">
              <h4>Abhyanga Massage</h4>
              <p>
                with Dr. Priya Sharma <br />
                <span className="session-time">Today | 2:00 PM (90 mins)</span>
              </p>
              <span className="status confirmed">Confirmed</span>
            </div>
            <div className="wellness-tip">
              <h4>💡 Daily Wellness Tip</h4>
              <p>
                Drink warm water with a pinch of turmeric every morning to boost
                immunity and reduce inflammation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

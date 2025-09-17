import React, { useState } from "react";
import { FaBell, FaLeaf, FaFileMedical, FaLightbulb } from "react-icons/fa";
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

  const wellnessTips = [
    "Start your day with a glass of warm water.",
    "Practice 10 minutes of deep breathing.",
    "Avoid heavy meals after sunset.",
    "Include turmeric and ginger in your diet.",
    "Sleep before 10 PM for better rejuvenation.",
    "Take short breaks during work for stretching.",
    "Eat seasonal fruits to balance your doshas.",
  ];

  const lifestyleTips = [
    "Follow a regular sleep schedule.",
    "Drink herbal teas like Tulsi or Chamomile.",
    "Engage in 20 mins of light yoga daily.",
    "Reduce screen time before bed.",
    "Eat freshly cooked meals, avoid leftovers.",
  ];

  const handleConcernClick = (concern) => {
    if (!concerns.includes(concern)) {
      setConcerns([...concerns, concern]);
    }
  };

  const randomTip =
    wellnessTips[Math.floor(Math.random() * wellnessTips.length)];

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

          {/* Ayurveda Lifestyle Section */}
          <div className="extra-box lifestyle">
            <h3>
              <FaLeaf /> Ayurveda Lifestyle
            </h3>
            <ul>
              {lifestyleTips.map((tip, i) => (
                <li key={i}>🌿 {tip}</li>
              ))}
            </ul>
          </div>

          {/* My Reports Section */}
          <div className="extra-box reports">
            <h3>
              <FaFileMedical /> My Reports
            </h3>
            <p>View and download your health reports & prescriptions.</p>
            <button className="btn-view">📂 Open Reports</button>
          </div>

          {/* Daily Wellness Tips */}
          <div className="extra-box wellness">
            <h3>
              <FaLightbulb /> Daily Wellness Tip
            </h3>
            <p>💡 {randomTip}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

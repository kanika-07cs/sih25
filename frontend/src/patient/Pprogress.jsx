import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../patient/pprogress.css";

const data = [
  { month: "Aug", Wellness: 40, Stress: 80, Energy: 30 },
  { month: "Sep", Wellness: 55, Stress: 65, Energy: 45 },
  { month: "Oct", Wellness: 65, Stress: 50, Energy: 60 },
  { month: "Nov", Wellness: 78, Stress: 35, Energy: 75 },
  { month: "Dec", Wellness: 85, Stress: 25, Energy: 88 },
];

export default function Progress() {
  return (
    <div className="progress-container">
      {/* Recovery Progress Section */}
      <div className="recovery-card glass-card">
        <h3 className="section-title">🌿 Recovery Progress</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="Wellness" stroke="#22c55e" strokeWidth={3} />
            <Line type="monotone" dataKey="Stress" stroke="#ef4444" strokeWidth={3} />
            <Line type="monotone" dataKey="Energy" stroke="#eab308" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>

        <div className="stats">
          <div>
            <h4 className="stat green">85%</h4>
            <p>Wellness</p>
          </div>
          <div>
            <h4 className="stat red">25%</h4>
            <p>Stress</p>
          </div>
          <div>
            <h4 className="stat yellow">88%</h4>
            <p>Energy</p>
          </div>
        </div>
      </div>

      {/* Milestones & Goals Section */}
      <div className="milestones-card glass-card">
        <h3 className="section-title">🎯 Milestones & Goals</h3>
        <div className="progress-bar">
          <span>Treatment Cycle</span>
          <div className="bar">
            <div className="fill"></div>
          </div>
          <p className="small-text">75% Complete | Expected completion: Sept 30, 2025</p>
        </div>

        <div className="milestone">
          <span>First Panchakarma Cycle</span>
          <p className="date">Oct 15</p>
        </div>
        <div className="milestone">
          <span>Stress Reduction (50%)</span>
          <p className="date">Nov 10</p>
        </div>
        <div className="milestone">
          <span>Energy Improvement (75%)</span>
          <p className="date">Dec 5</p>
        </div>
        <div className="milestone complete">
          <span>Complete Treatment Plan</span>
          <p className="date">Dec 30</p>
        </div>
      </div>
    </div>
  );
}

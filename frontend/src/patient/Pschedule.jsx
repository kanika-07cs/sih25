import React from "react";
import "../patient/pschedule.css";
import { FaCalendarAlt, FaClock, FaVideo, FaClinicMedical } from "react-icons/fa";
import { MdOutlineCancel, MdRefresh } from "react-icons/md";

const sessions = [
  {
    title: "Abhyanga Massage",
    status: "confirmed",
    doctor: "Dr. Priya Sharma",
    date: "Today",
    time: "2:00 PM",
    duration: "90 minutes",
    type: "Online",
  },
  {
    title: "Consultation",
    status: "confirmed",
    doctor: "Dr. Rajesh Kumar",
    date: "Tomorrow",
    time: "11:00 AM",
    duration: "45 minutes",
    type: "Clinic Visit",
  },
  {
    title: "Dietary Planning",
    status: "pending",
    doctor: "Dr. Anita Patel",
    date: "Dec 18",
    time: "4:00 PM",
    duration: "60 minutes",
    type: "Online",
  },
  {
    title: "Panchakarma Session",
    status: "confirmed",
    doctor: "Dr. Suresh Nair",
    date: "Dec 20",
    time: "10:00 AM",
    duration: "120 minutes",
    type: "Clinic Visit",
  },
];

const Schedule = () => {
  return (
    <div className="schedule-container">
      <h2 className="schedule-title">
        <FaCalendarAlt className="icon" /> Schedule & Alerts
      </h2>

      <div className="tabs">
        <button className="tab active">Upcoming Sessions</button>
        <button className="tab">Calendar View</button>
      </div>

      <div className="session-grid">
        {sessions.map((session, index) => (
          <div className="session-card" key={index}>
            <div className="session-header">
              <h3>{session.title}</h3>
              <span className={`status ${session.status}`}>{session.status}</span>
            </div>
            <p className="doctor">with {session.doctor}</p>

            <div className="session-details">
              <p><FaCalendarAlt className="detail-icon" /> {session.date}</p>
              <p><FaClock className="detail-icon" /> {session.time} ({session.duration})</p>
              <p>
                {session.type === "Online" ? (
                  <FaVideo className="detail-icon" />
                ) : (
                  <FaClinicMedical className="detail-icon" />
                )}{" "}
                {session.type}
              </p>
            </div>

            <div className="session-actions">
              <MdRefresh className="action-icon" title="Reschedule" />
              <MdOutlineCancel className="action-icon cancel" title="Cancel" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;

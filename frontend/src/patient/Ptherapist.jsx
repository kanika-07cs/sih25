import React from "react";
import "../patient/ptherapist.css";

const therapists = [
  {
    initials: "BP",
    name: "Dr. BharathiPriya",
    specialty: "Panchakarma Specialist",
    experience: "15 years",
    location: "Delhi",
    availability: "Available Today",
    fee: "₹2,500/session",
    languages: ["Hindi", "English","Tamil"],
    rating: 4.9,
    reviews: 127,
  },
  {
    initials: "RK",
    name: "Dr. Rajesh Kumar",
    specialty: "Stress & Anxiety",
    experience: "12 years",
    location: "Mumbai",
    availability: "Next Available: Tomorrow",
    fee: "₹2,000/session",
    languages: ["Hindi", "English", "Marathi"],
    rating: 4.8,
    reviews: 89,
  },
  {
    initials: "AP",
    name: "Dr. Anita Patel",
    specialty: "Digestive Health",
    experience: "18 years",
    location: "Bangalore",
    availability: "Available Now",
    fee: "₹2,800/session",
    languages: ["English", "Gujarati"],
    rating: 4.9,
    reviews: 156,
  },
  {
    initials: "SN",
    name: "Dr. Suresh Nair",
    specialty: "Joint Pain & Arthritis",
    experience: "20 years",
    location: "Kerala",
    availability: "Available Today",
    fee: "₹3,000/session",
    languages: ["English", "Malayalam"],
    rating: 4.7,
    reviews: 203,
  },
];

export default function PTherapist() {
  return (
    <div className="therapist-wrapper">
      <div className="header">
        <h2>📅 Select Your Therapist</h2>
        <div className="filter">
          <select>
            <option>All Therapists</option>
            <option>Available Today</option>
            <option>Top Rated</option>
          </select>
        </div>
      </div>

      <div className="therapist-grid">
        {therapists.map((t, i) => (
          <div className="therapist-card" key={i}>
            <div className="therapist-info">
              <div className="avatar">{t.initials}</div>
              <div>
                <h3>{t.name}</h3>
                <p className="specialty">{t.specialty}</p>
                <p className="details">
                  <span>🕒 {t.experience}</span> • <span>📍 {t.location}</span>
                </p>
              </div>
            </div>

            <div className="rating">
              ⭐ {t.rating} <span>({t.reviews} reviews)</span>
            </div>

            <div className="availability">
              <span>{t.availability}</span>
            </div>

            <div className="fee">{t.fee}</div>

            <div className="languages">
              {t.languages.map((lang, idx) => (
                <span key={idx} className="lang-tag">
                  {lang}
                </span>
              ))}
            </div>

            <button className="book-btn">Select & Book</button>
          </div>
        ))}
      </div>
    </div>
  );
}

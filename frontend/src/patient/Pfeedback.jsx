import React, { useState } from "react";
import "./pfeedback.css";

const initialFeedbacks = [
  {
    initials: "PS",
    session: "Abhyanga Massage",
    doctor: "Dr. Priya Sharma",
    date: "Dec 14, 2024",
    comment: "Excellent session! Feeling much more relaxed.",
    rating: 5.0,
  },
  {
    initials: "RK",
    session: "Stress Consultation",
    doctor: "Dr. Rajesh Kumar",
    date: "Dec 10, 2024",
    comment: "Very helpful advice on managing stress.",
    rating: 4.0,
  },
  {
    initials: "AP",
    session: "Dietary Planning",
    doctor: "Dr. Anita Patel",
    date: "Dec 8, 2024",
    comment: "",
    rating: null,
  },
];

export default function PFeedback() {
  const [feedbacks, setFeedbacks] = useState(initialFeedbacks);
  const [inputs, setInputs] = useState({}); // to store text entered for each feedback

  const handleChange = (index, value) => {
    setInputs({ ...inputs, [index]: value });
  };

  const handleSubmit = (index) => {
    const newFeedbacks = [...feedbacks];
    newFeedbacks[index].comment = inputs[index] || "";
    setFeedbacks(newFeedbacks);
    setInputs({ ...inputs, [index]: "" }); // clear textbox after submit
  };

  return (
    <div className="feedback-wrapper">
      {/* Left - Session Feedback */}
      <div className="session-feedback">
        <h3>💬 Session Feedback</h3>

        {feedbacks.map((f, idx) => (
          <div className="feedback-card" key={idx}>
            <div className="card-header">
              <div className="avatar">{f.initials}</div>
              <div>
                <h4>{f.session}</h4>
                <p>
                  with {f.doctor} <br />
                  <span className="date">{f.date}</span>
                </p>
              </div>
              {f.rating && (
                <div className="rating">
                  {"⭐".repeat(Math.floor(f.rating))}
                  <span className="score">{f.rating.toFixed(1)}</span>
                </div>
              )}
            </div>

            {f.comment ? (
              <div className="comment success">{f.comment}</div>
            ) : (
              <div className="comment give-feedback">
                <textarea
                  placeholder="Write your feedback..."
                  value={inputs[idx] || ""}
                  onChange={(e) => handleChange(idx, e.target.value)}
                />
                <button onClick={() => handleSubmit(idx)}>Submit</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right - Feedback Summary */}
      <div className="feedback-summary">
        <h3>👍 Feedback Summary</h3>
        <div className="summary-box">
          <h2>4.8</h2>
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <p className="reviews">Based on 12 reviews</p>
        </div>

        <div className="category">
          <h4>📊 Category Breakdown</h4>
          <div className="cat-item">
            <span>Treatment Quality</span>
            <span>4.9</span>
          </div>
          <div className="progress"><div style={{ width: "98%" }} /></div>

          <div className="cat-item">
            <span>Therapist Knowledge</span>
            <span>4.8</span>
          </div>
          <div className="progress"><div style={{ width: "96%" }} /></div>

          <div className="cat-item">
            <span>Communication</span>
            <span>4.7</span>
          </div>
          <div className="progress"><div style={{ width: "94%" }} /></div>

          <div className="cat-item">
            <span>Overall Experience</span>
            <span>4.8</span>
          </div>
          <div className="progress"><div style={{ width: "96%" }} /></div>
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
  );
}

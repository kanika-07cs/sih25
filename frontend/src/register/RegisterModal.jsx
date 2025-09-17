import React, { useState } from "react";
import "../login/login.css";

export default function RegisterModal({ closeModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!accepted) {
      alert("Please accept the Terms & Conditions");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, phone }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Registration successful!");
        closeModal();
      } else {
        alert(data.msg || "Registration failed");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Register</h2>
        <form onSubmit={handleRegister} className="register-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label className="checkbox">
            <input
              type="checkbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
            />
            I accept the Terms & Conditions
          </label>

          <button type="submit">Register</button>
          <button type="button" className="close-btn" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

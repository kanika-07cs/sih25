import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login/login.css";
import RegisterModal from "../register/RegisterModal";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful!");
        console.log("User:", data);

        switch (data.role) {
          case "patient":
            navigate("/patient-home");
            break;
          case "therapist":
            navigate("/therapist-home");
            break;
          case "agent":
            navigate("/agent-home");
            break;
          default:
            alert("Role not recognized");
        }
      } else {
        alert(data.msg || "Login failed");
      }
    } catch (err) {
      console.error("Server error:", err);
      alert("Server error");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* Left side - form */}
        <div className="login-left">
          <div className="brand-logo">
            <h2>🌿 HealthCare</h2>
          </div>
          <h3>Welcome back</h3>
          <p className="subtitle">
            Access your health dashboard and manage your therapy sessions.
          </p>

          <form onSubmit={handleLogin} className="login-form">
            <label>Email address</label>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="login-btn">
              Login Account
            </button>
          </form>

          <p className="signup-text">
            Don’t have an account?{" "}
            <span className="link" onClick={() => setShowRegister(true)}>
              Register
            </span>
          </p>

          <div className="divider">OR</div>
          <button className="google-btn">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTroV7JQvlAS1wSXW3bIKdPG_lZBHkl3fZC9w&s"
              alt="Google"
            />
            Continue with Google
          </button>
        </div>

        {/* Right side - image */}
        <div className="login-right">
          <img
            src="https://german-heart-centre.com/wp-content/uploads/2023/03/Internal-Medicine.jpg"
            alt="Healthcare"
          />
        </div>
      </div>

      {showRegister && (
        <RegisterModal closeModal={() => setShowRegister(false)} />
      )}
    </div>
  );
}

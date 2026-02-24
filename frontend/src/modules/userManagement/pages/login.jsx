import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/login.css";
import loginImage from "../../../assets/images/Bajaj_Sugar_bg.png";

export default function Login() {
  const navigate = useNavigate();
  const [season, setSeason] = useState("2526");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please Enter UserID and Password");
      return;
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          season,
          name: username,
          password,
        }),
      });

      const data = await res.json();

      switch (data.msg) {
        case "1":
          alert("Invalid UserID or Password");
          break;
        case "2":
          alert("User Not Mapped For Selected Season");
          break;
        case "3":
          alert("Missing Credentials");
          break;
        default:
          navigate("/dashboard");
      }
    } catch (err) {
      alert("Server Error / Network Issue");
    }
  };

  return (
    <div className="login-wrapper">
      {/* LEFT FACTORY VISUAL */}
      <div className="login-left">
        <img src={loginImage} alt="Bajaj Sugar Factory" />
      </div>

      {/* RIGHT LOGIN PANEL */}
      <div className="login-right">
        <form className="sign-in-form" onSubmit={handleLogin}>
          {/* FACTORY BRANDING */}
         

          <h2>Authorized User Login</h2>

          {/* SEASON SELECTOR */}
          <div className="input-field">
            <span>📅</span>
            <select value={season} onChange={(e) => setSeason(e.target.value)}>
              <option value="2122">Season 2021-2022</option>
              <option value="2223">Season 2022-2023</option>
              <option value="2324">Season 2023-2024</option>
              <option value="2425">Season 2024-2025</option>
              <option value="2526">Season 2025-2026</option>
            </select>
          </div>

          {/* USER ID */}
          <div className="input-field">
            <span>👤</span>
            <input
              type="text"
              placeholder="Enter UserID / Employee Code"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="input-field">
            <span>🔒</span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          <button className="btn">Login to System</button>

          {/* FOOTER NOTE */}
          <div className="login-footer">
            <small>© Bajaj Sugar – Authorized Access Only</small>
          </div>
        </form>
      </div>
    </div>
  );
}
import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.get(
        `http://127.0.0.1:5000/users?username=${encodeURIComponent(form.username)}&password=${encodeURIComponent(form.password)}`
      );

      if (res.data && res.data.length > 0) {
        login(res.data[0]);
        navigate("/movies");
      } else {
        setError("Sai username hoặc password!");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Lỗi kết nối tới server hoặc CORS.");
    }
  };

  return (
    <div className="login-card" role="main">
      <div className="login-header">
        <div className="login-logo">LM</div>
        <div>
          <h3 className="login-title">Login Movies</h3>
          <p className="login-sub">Sign in to access the movie list</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="login-form" aria-label="Login form">
        <label htmlFor="username" style={{ fontSize: 13, color: "#374151" }}>Username</label>
        <input
          id="username"
          className="login-input"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter your username"
          required
        />

        <label htmlFor="password" style={{ fontSize: 13, color: "#374151" }}>Password</label>
        <input
          id="password"
          className="login-input"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        <button type="submit" className="login-button">Sign in</button>

        {error && <p className="login-error" role="alert">{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;

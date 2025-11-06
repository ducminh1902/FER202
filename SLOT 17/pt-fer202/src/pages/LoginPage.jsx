import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ConfirmModal from "../components/ConfirmModal";

const LoginPage = () => {
  const { login } = useAuth();

  // ✅ State quản lý input, lỗi, modal
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  // ✅ Hàm xử lý login
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Đã bấm Login");

    if (!username) return setError("Username is required.");
    if (!password) return setError("Password is required.");
    if (password.length < 6)
      return setError("Password must be at least 6 characters.");

    try {
      const user = await login(username, password);
      console.log("Đăng nhập thành công:", user);

      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/home");
      }, 2000);
    } catch (err) {
      console.log("Đăng nhập thất bại:", err.message);
      setError("Invalid username or password!");
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <h2 className="mb-3">Login</h2>

      {/* ✅ Hiển thị lỗi */}
      {error && (
        <div className="alert alert-danger w-50 text-center">{error}</div>
      )}

      <form onSubmit={handleSubmit} style={{ width: "300px" }}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>
      </form>

      {/* ✅ Modal hiển thị khi login thành công */}
      <ConfirmModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title="Login Successful"
        message={`Welcome, ${username}! Login successful.`}
      />
    </div>
  );
};

export default LoginPage;

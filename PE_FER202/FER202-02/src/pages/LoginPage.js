import React from 'react';
import { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import LoginForm from "../components/LoginForm.js";
import "../styles/LoginPage.css";

// Create axios instance
const api = axios.create({
  baseURL: "http://localhost:3001"
});

const LoginPage = ({ setUser }) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.get(
        `/users?username=${form.username}&password=${form.password}`
      );
      if (data.length > 0) {
        setUser(data[0]);
        setShow(true);
        setTimeout(() => {
          setShow(false);
          navigate("/expenses");// navigate("/expenses");
        }, 1500);
      } else {
        setAlert("Invalid username or password!");
      }
    } catch (err) {
      console.error(err);
      setAlert("Server error!");
    }
  };

  const handleCancel = () => {
    setForm({ username: "", password: "" });
    setAlert("");
  };

  return (
    <Card className="p-4 mx-auto mt-5 login-card" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-3 login-title">Login</h3>
      {alert && <div className="alert alert-danger">{alert}</div>}

      <LoginForm
        username={form.username}
        password={form.password}
        onChange={handleChange}
        onSubmit={handleLogin}
        onCancel={handleCancel}
      />

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body className="text-center p-4 login-modal">
          <h5>Welcome, {form.username} login successful!</h5>
        </Modal.Body>
      </Modal>
    </Card>
  );
};

LoginPage.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default LoginPage;

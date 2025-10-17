// src/components/RegisterForm.jsx
import React, { useState, useEffect } from 'react';

export default function RegisterForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Validate one field
  const validateField = (name, value, currentForm = form) => {
    switch (name) {
      case 'username': {
        const v = value.trim();
        if (v.length < 3) return 'Username phải ≥ 3 ký tự';
        if (!/^[a-zA-Z0-9._]+$/.test(v)) return 'Username chỉ chứa chữ, số, _ hoặc .';
        return '';
      }
      case 'email': {
        // đơn giản mà đủ
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email không hợp lệ';
        return '';
      }
      case 'password': {
        if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(
            value
          )
        )
          return 'Password phải ≥8 ký tự, gồm hoa, thường, số, ký tự đặc biệt';
        return '';
      }
      case 'confirmPassword': {
        if (value !== currentForm.password) return 'Confirm password không khớp';
        return '';
      }
      default:
        return '';
    }
  };

  // update form + validate field
  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextForm = { ...form, [name]: value };
    setForm(nextForm);

    // cập nhật lỗi cho trường vừa thay đổi
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value, nextForm) }));

    // nếu thay password thì cần validate lại confirmPassword
    if (name === 'password' && nextForm.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: validateField('confirmPassword', nextForm.confirmPassword, nextForm),
      }));
    }
  };

  // kiểm tra toàn bộ form
  const validateAll = () => {
    const newErrors = {};
    Object.keys(form).forEach((k) => {
      newErrors[k] = validateField(k, form[k], form);
    });
    setErrors(newErrors);
    // trả về true nếu tất cả rỗng
    return Object.values(newErrors).every((v) => v === '');
  };

  // trạng thái enable submit
  const isFormValid = () => {
    // tất cả trường không rỗng + errors rỗng + password confirm bằng nhau
    const filled = Object.values(form).every((v) => v !== '');
    const noError = Object.values(errors).every((e) => !e);
    return filled && noError && form.password === form.confirmPassword;
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = validateAll();
    if (!ok) return;
    // show toast & modal; không reload trang
    setShowToast(true);
    setShowModal(true);
    // auto-hide toast sau 2s
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleCancel = () => {
    setForm({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setErrors({});
  };

  // để cập nhật trạng thái isFormValid khi errors/form thay đổi
  useEffect(() => {
    // no-op, but triggers render; isFormValid() được gọi ở button disabled
  }, [form, errors]);

  return (
    <div className="container mt-4" style={{ maxWidth: 540 }}>
      <h3 className="mb-4 text-center text-primary">Register Form</h3>

      <form onSubmit={handleSubmit} noValidate>
        {/* Username */}
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            type="text"
            placeholder="username"
          />
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            type="email"
            placeholder="you@example.com"
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            type="password"
            placeholder="Password"
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        {/* Confirm */}
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
            type="password"
            placeholder="Confirm password"
          />
          {errors.confirmPassword && (
            <div className="invalid-feedback">{errors.confirmPassword}</div>
          )}
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary" disabled={!isFormValid()}>
            Submit
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>

      {/* Toast (Bootstrap CSS only) */}
      <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 1055 }}>
        <div className={`toast ${showToast ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <strong className="me-auto">Info</strong>
            <small>now</small>
            <button type="button" className="btn-close ms-2 mb-1" onClick={() => setShowToast(false)} aria-label="Close"></button>
          </div>
          <div className="toast-body">Submitted successfully!</div>
        </div>
      </div>

      {/* Modal (custom controlled using Bootstrap CSS classes) */}
      {showModal && (
        <>
          <div className="modal-backdrop fade show"></div>
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
            style={{ zIndex: 1060 }}
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Submitted Account</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setShowModal(false)}
                  />
                </div>
                <div className="modal-body">
                  <div className="card text-center">
                    <div className="card-body">
                      <h5 className="card-title">{form.username}</h5>
                      <p className="card-text">Email: {form.email}</p>
                      <p className="card-text"><small className="text-muted">Password: {form.password}</small></p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

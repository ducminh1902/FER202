import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

export default function LoginForm({
  username,
  password,
  onChange,
  onSubmit,
  onCancel,
}) {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={username}
          onChange={onChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
      </Form.Group>

      <div className="d-flex justify-content-between">
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </Form>
  );
}

// ✅ Kiểm tra PropTypes đúng yêu cầu đề bài
LoginForm.propTypes = {
  username: PropTypes.string.isRequired,  // phải là string, bắt buộc
  password: PropTypes.string.isRequired,  // phải là string, bắt buộc
  onChange: PropTypes.func.isRequired,    // hàm xử lý thay đổi input
  onSubmit: PropTypes.func.isRequired,    // hàm xử lý khi nhấn Login
  onCancel: PropTypes.func.isRequired,    // hàm xử lý khi nhấn Cancel
};
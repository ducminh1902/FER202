// Import các thư viện cần thiết
import React, { useReducer } from "react"; // useReducer giúp quản lý state phức tạp thay vì dùng useState
import { Form, Button, Container, Card } from "react-bootstrap"; // Dùng các component UI của Bootstrap

// -----------------------------
// 1️⃣ Khởi tạo state ban đầu
// -----------------------------
const initialState = {
  username: "",          // tên người dùng
  email: "",             // email người dùng
  password: "",          // mật khẩu
  confirmPassword: "",   // xác nhận mật khẩu
};

// -----------------------------
// 2️⃣ Hàm reducer quản lý state
// -----------------------------
function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      // Cập nhật giá trị một trường cụ thể (username, email, password, ...)
      return { ...state, [action.field]: action.value };

    case "RESET":
      // Reset form về giá trị ban đầu
      return initialState;

    default:
      // Nếu action không khớp, trả lại state cũ
      return state;
  }
}

// -----------------------------
// 3️⃣ Component chính: SignUpForm
// -----------------------------
function SignUpForm() {
  // Dùng useReducer thay vì useState
  // state: chứa toàn bộ dữ liệu form
  // dispatch: dùng để gửi action đến reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // -----------------------------
  // 4️⃣ Xử lý khi người dùng nhập liệu
  // -----------------------------
  const handleChange = (e) => {
    // Cập nhật giá trị của input tương ứng
    // e.target.name là tên field (vd: "email")
    // e.target.value là giá trị người dùng nhập
    dispatch({ 
      type: "SET_FIELD", 
      field: e.target.name, 
      value: e.target.value 
    });
  };

  // -----------------------------
  // 5️⃣ Xử lý khi submit form
  // -----------------------------
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn trang reload mặc định của form

    // Kiểm tra nếu 2 mật khẩu không trùng khớp
    if (state.password !== state.confirmPassword) {
      alert("Passwords do not match!"); // Cảnh báo
      return;
    }

    // Nếu hợp lệ, hiện thông báo chào mừng
    alert(`Welcome, ${state.username}!`);

    // Reset lại form sau khi submit
    dispatch({ type: "RESET" });
  };

  // -----------------------------
  // 6️⃣ Giao diện hiển thị (UI)
  // -----------------------------
  return (
    <Container className="d-flex justify-content-center mt-5">
      {/* Container giúp căn giữa form trên màn hình */}
      <Card style={{ width: "400px", padding: "20px" }}>
        {/* Card là khung chứa form */}
        <h3 className="text-center mb-3">Sign Up</h3>

        {/* Bắt đầu form, khi nhấn submit sẽ gọi handleSubmit */}
        <Form onSubmit={handleSubmit}>
          
          {/* Nhập username */}
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={state.username}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Nhập email */}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Nhập password */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Xác nhận lại password */}
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={state.confirmPassword}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Nút đăng ký */}
          <Button type="submit" className="w-100">
            Sign Up
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

// -----------------------------
// 7️⃣ Export mặc định để App.js có thể import được
// -----------------------------
export default SignUpForm;

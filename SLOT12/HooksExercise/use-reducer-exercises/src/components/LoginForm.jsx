import React, { useReducer } from "react";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  Modal,
} from "react-bootstrap";

/*
  initialState: trạng thái khởi tạo cho reducer.
  - user: object chứa các trường form (username, password)
  - errors: object chứa lỗi cho từng trường, key = tên trường
  - showModal: boolean hiển thị modal khi login thành công
*/
const initialState = {
  user: { username: "", password: "" },
  errors: {},
  showModal: false,
};

/*
  reducer: hàm thuần xử lý state dựa trên action.type và payload.
  Luồng: component gọi dispatch({type, payload}) -> reducer nhận -> trả về state mới.
*/
function reducer(state, action) {
  switch (action.type) {
    /*
      CHANGE_FIELD:
      - payload: { name, value } (ở đây chúng ta pass e.target từ input)
      - cập nhật giá trị trường tương ứng trong user
      - đồng thời kiểm tra validation đơn giản: nếu rỗng thì đặt lỗi, nếu không thì xóa lỗi
    */
    case "CHANGE_FIELD": {
      const { name, value } = action.payload; // tên input và giá trị mới
      // clone user hiện tại và update trường được thay đổi
      const newUser = { ...state.user, [name]: value };

      // clone errors để sửa chữa: nếu value rỗng thì set lỗi, ngược lại xóa lỗi
      let newErrors = { ...state.errors };
      if (value.trim() === "") {
        // capitalize tên trường làm message đẹp hơn
        newErrors[name] =
          `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
      } else {
        // xóa lỗi của trường này nếu có
        delete newErrors[name];
      }

      // trả về state mới (không mutate state cũ)
      return { ...state, user: newUser, errors: newErrors };
    }

    /*
      SUBMIT_FORM:
      - kiểm tra toàn bộ trường khi submit (ở đây chỉ 2 trường username/password)
      - nếu có lỗi thì trả về state với errors mới (và không show modal)
      - nếu không có lỗi thì clear errors và set showModal = true
    */
    case "SUBMIT_FORM": {
      const { username, password } = state.user;
      const newErrors = {};

      // validation: nếu rỗng thì thêm thông báo vào newErrors
      if (username.trim() === "") newErrors.username = "Username is required";
      if (password.trim() === "") newErrors.password = "Password is required";

      // nếu có lỗi -> trả về state với errors (không chuyển trang/modal)
      if (Object.keys(newErrors).length > 0) {
        return { ...state, errors: newErrors };
      }

      // nếu không có lỗi -> clear errors và hiển thị modal thành công
      return { ...state, errors: {}, showModal: true };
    }

    /*
      CLOSE_MODAL:
      - khi đóng modal, ta muốn reset form về trạng thái ban đầu.
      - return { ...initialState } đảm bảo reset toàn bộ (user, errors, showModal)
    */
    case "CLOSE_MODAL":
      return { ...initialState };

    /* default: nếu action không khớp, trả về state hiện tại (không thay đổi) */
    default:
      return state;
  }
}

/*
  Component chính: LoginFormReducer
  - dùng useReducer thay vì nhiều useState khi state phức tạp/logic phức tạp hơn.
*/
export default function LoginFormReducer() {
  // useReducer: trả về [state, dispatch]
  const [state, dispatch] = useReducer(reducer, initialState);

  // destructuring để dùng dễ hơn trong JSX
  const { user, errors, showModal } = state;

  /*
    handleChange: khi input thay đổi, dispatch action CHANGE_FIELD
    - e.target có shape: { name, value, ... }
    - ở reducer chúng ta chỉ dùng name và value
  */
  const handleChange = (e) =>
    dispatch({ type: "CHANGE_FIELD", payload: e.target });

  /*
    handleSubmit: chặn reload form (e.preventDefault()) rồi dispatch SUBMIT_FORM
    - toàn bộ validation submit được xử lý trong reducer
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_FORM" });
  };

  /*
    handleCloseModal: đóng modal, reset form
    - reducer xử reset bằng action CLOSE_MODAL -> trả về initialState
  */
  const handleCloseModal = () => dispatch({ type: "CLOSE_MODAL" });

  // ---------- JSX render ----------
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Header>
              {/* tiêu đề */}
              <h3 className="text-center">Login Form (useReducer)</h3>
            </Card.Header>
            <Card.Body>
              {/* Form: onSubmit gọi handleSubmit */}
              <Form onSubmit={handleSubmit}>
                {/* Username field */}
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"                 // name trùng key trong state.user
                    value={user.username}           // bind với state
                    onChange={handleChange}         // gọi dispatch CHANGE_FIELD
                    isInvalid={!!errors.username}   // nếu có lỗi thì hiển thị trạng thái invalid
                    placeholder="Enter username"
                  />
                  <Form.Control.Feedback type="invalid">
                    {/* hiển thị lỗi tương ứng nếu có */}
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Password field */}
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"                 // name trùng key trong state.user
                    value={user.password}           // bind với state
                    onChange={handleChange}         // gọi dispatch CHANGE_FIELD
                    isInvalid={!!errors.password}   // nếu có lỗi thì hiển thị trạng thái invalid
                    placeholder="Enter password"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Button submit */}
                <Button type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal hiển thị khi đăng nhập thành công (show = showModal) */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center text-success">
          {/* Chú ý: user.username được reset khi đóng modal (do reducer trả về initialState) */}
          Welcome, {user.username || "User"}!
        </Modal.Body>
        <Modal.Footer>
          {/* đóng modal gọi handleCloseModal -> dispatch CLOSE_MODAL -> reset form */}
          <Button variant="success" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

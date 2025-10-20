// LightSwitch component using useReducer to toggle light on and off
import React, { useReducer } from "react";
import Button from "react-bootstrap/Button";

// 1️⃣ Khởi tạo reducer
function lightReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, isLightOn: !state.isLightOn }; // Đảo trạng thái đèn
    default:
      return state;
  }
}

// 2️⃣ Component chính
function LightSwitch() {
  // useReducer(reducer, initialState)
  const [state, dispatch] = useReducer(lightReducer, { isLightOn: false });

  // 3️⃣ Hàm để gửi action (giống setState nhưng chuyên nghiệp hơn)
  const toggleLight = () => dispatch({ type: "TOGGLE" });

  // 4️⃣ Style cho nút
  const buttonStyle = {
    margin: "5px",
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  };

  // 5️⃣ JSX render
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Công Tắc Đèn</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        Đèn hiện đang: {state.isLightOn ? "Bật" : "Tắt"}
      </p>
      <Button
        onClick={toggleLight}
        style={{
          ...buttonStyle,
          background: state.isLightOn ? "red" : "green",
          color: "white",
        }}
      >
        {state.isLightOn ? "Tắt Đèn" : "Bật Đèn"}
      </Button>
    </div>
  );
}

export default LightSwitch;

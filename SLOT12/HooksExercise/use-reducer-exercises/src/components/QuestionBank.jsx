import React, { useReducer, useEffect, useState } from "react";
import { Button, Container, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// 🧠 Trạng thái ban đầu
const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: "", // ✅ Phản hồi đúng/sai
};

// ⚙️ Reducer quản lý hành động
function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "SUBMIT_ANSWER": {
      const currentQ = state.questions[state.currentQuestion];
      const isCorrect = state.selectedOption === currentQ.answer;

      return {
        ...state,
        feedback: isCorrect
          ? "correct"
          : `incorrect:${currentQ.answer}`, // Lưu phản hồi
        score: isCorrect ? state.score + 1 : state.score,
      };
    }

    case "NEXT_QUESTION": {
      const isLast = state.currentQuestion + 1 === state.questions.length;
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        feedback: "",
        showScore: isLast,
      };
    }

    case "RESTART_QUIZ":
      return { ...initialState };

    default:
      return state;
  }
}

export default function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, feedback } = state;

  // 🕒 State cho bộ đếm thời gian
  const [timeLeft, setTimeLeft] = useState(10);
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem("highScore")) || 0
  );

  // 🧭 Mỗi khi đổi câu hỏi, reset đồng hồ 10s
  useEffect(() => {
    if (showScore) return;
    setTimeLeft(10);
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          dispatch({ type: "SUBMIT_ANSWER" }); // Hết giờ => tự nộp
          setTimeout(() => dispatch({ type: "NEXT_QUESTION" }), 1000);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, showScore]);

  // 💾 Cập nhật điểm cao vào LocalStorage
  useEffect(() => {
    if (showScore && score > highScore) {
      localStorage.setItem("highScore", score);
      setHighScore(score);
    }
  }, [showScore, score, highScore]);

  const handleOptionSelect = (option) =>
    dispatch({ type: "SELECT_OPTION", payload: option });

  const handleSubmit = () => dispatch({ type: "SUBMIT_ANSWER" });

  const handleNextQuestion = () => dispatch({ type: "NEXT_QUESTION" });

  const handleRestartQuiz = () => dispatch({ type: "RESTART_QUIZ" });

  // 🎨 Giao diện
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {!showScore ? (
        <div style={{ width: "100%", maxWidth: "600px" }}>
          {/* 🧮 Tiến trình */}
          <h5 className="text-muted mb-2">
            Question {currentQuestion + 1} / {questions.length}
          </h5>
          <ProgressBar
            now={((currentQuestion + 1) / questions.length) * 100}
            className="mb-3"
          />

          {/* ⏰ Đồng hồ đếm ngược */}
          <h6
            style={{
              color: timeLeft < 5 ? "red" : "#333",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Time Left: {timeLeft}s
          </h6>

          <h4 className="mb-3">{questions[currentQuestion].question}</h4>

          <div
            className="d-flex justify-content-center flex-wrap mb-3"
            style={{ gap: "10px" }}
          >
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant={
                  selectedOption === option ? "primary" : "outline-secondary"
                }
                onClick={() => handleOptionSelect(option)}
                disabled={feedback !== ""}
                style={{
                  minWidth: "120px",
                  fontSize: "16px",
                  padding: "8px 20px",
                  borderRadius: "8px",
                }}
              >
                {option}
              </Button>
            ))}
          </div>

          {/* ✅❌ Phản hồi */}
          {feedback && (
            <div className="mt-2 mb-3 fw-bold">
              {feedback === "correct" ? (
                <span className="text-success">
                  <FaCheckCircle /> Correct! 🎉
                </span>
              ) : (
                <span className="text-danger">
                  <FaTimesCircle /> Incorrect! The correct answer is{" "}
                  <strong>{feedback.split(":")[1]}</strong>
                </span>
              )}
            </div>
          )}

          {/* 🔘 Nút hành động */}
          {!feedback ? (
            <Button
              onClick={handleSubmit}
              disabled={!selectedOption}
              variant="success"
            >
              Submit
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} variant="primary">
              Next
            </Button>
          )}
        </div>
      ) : (
        // 🏁 Màn hình kết quả
        <div style={{ textAlign: "center" }}>
          <h3 className="fw-bold mt-4 mb-3">
            Your Score: {score} / {questions.length}
          </h3>
          <h5 className="text-info">🏆 High Score: {highScore}</h5>
          <Button
            onClick={handleRestartQuiz}
            style={{
              backgroundColor: "#1a73e8",
              border: "none",
              fontWeight: "600",
              padding: "10px 25px",
              borderRadius: "8px",
              marginTop: "15px",
            }}
          >
            Restart Quiz
          </Button>
        </div>
      )}
    </Container>
  );
}

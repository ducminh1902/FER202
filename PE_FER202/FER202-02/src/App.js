import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useState } from "react";
import LoginPage from "./pages/LoginPage.js";
import ExpensesPage from "./pages/ExpensePage.js";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Container className="py-3">
        <Routes>
          <Route path="/" element={<LoginPage setUser={setUser} />} />
          {/* <Route path="/expenses" element={<ExpensesPage />} /> */}
         <Route path="/expenses" element={<ExpensesPage user={user} setUser={setUser} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

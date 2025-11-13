import { useEffect, useState } from "react";
import api from "../api/axios";
import { Card, Row, Col, Button, Form, Navbar, Container, Nav, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ExpensesPage = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
  });

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const { data } = await api.get("/expenses");
        setExpenses(data);
      } catch (error) {
        console.error("Error fetching Expenses:", error);
      }
    };
    fetchExpenses();
  }, []);

  // Lấy danh sách các category duy nhất
  const categories = [...new Set(expenses.map(item => item.category))];

  // Filter expenses theo category
  const filteredExpenses = selectedCategory
    ? expenses.filter(item => item.category === selectedCategory)
    : expenses;

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  // Mở modal để edit
  const handleEditClick = (expense) => {
    setEditingExpense(expense);
    setFormData({
      name: expense.name,
      amount: expense.amount,
      category: expense.category,
      date: expense.date,
    });
    setShowModal(true);
  };

  // Đóng modal
  const handleCloseModal = () => {
    setShowModal(false);
    setEditingExpense(null);
    setFormData({ name: "", amount: "", category: "", date: "" });
  };

  // Xử lý thay đổi form
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Lưu thay đổi
  const handleSaveExpense = async () => {
    try {
      await api.put(`/expenses/${editingExpense.id}`, formData);
      // Cập nhật danh sách expenses
      setExpenses(expenses.map(item =>
        item.id === editingExpense.id ? { ...item, ...formData } : item
      ));
      handleCloseModal();
      alert("Expense updated successfully!");
    } catch (error) {
      console.error("Error updating Expense:", error);
      alert("Failed to update expense");
    }
  };

  // Xóa chi tiêu
  const handleDeleteExpense = async (id) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      try {
        await api.delete(`/expenses/${id}`);
        // Xóa khỏi danh sách expenses
        setExpenses(expenses.filter(item => item.id !== id));
        alert("Expense deleted successfully!");
      } catch (error) {
        console.error("Error deleting Expense:", error);
        alert("Failed to delete expense");
      }
    }
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>PersonalBudget</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Item className="text-light me-3 d-flex align-items-center">
              Welcome, {user?.name || user?.username}
            </Nav.Item>
            <Button variant="outline-light" onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <h3 className="text-center mb-4">Expenses Management</h3>

      <Container>
        <div className="mb-4">
          <Form.Group className="d-flex align-items-center gap-3">
            <Form.Label className="mb-0 fw-bold">Filter by Category:</Form.Label>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ maxWidth: "250px" }}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </div>

        <table className="table table-bordered text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.category}</td>
                <td>{item.date}</td>
                <td>
                  <Button 
                    variant="warning" 
                    size="sm" 
                    className="me-2"
                    onClick={() => handleEditClick(item)}
                  >
                    Edit
                  </Button>
                  <Button 
                    variant="danger" 
                    size="sm"
                    onClick={() => handleDeleteExpense(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="table-dark">
            <tr>
              <td colSpan="1" className="fw-bold">Total</td>
              <td className="fw-bold">
                ${filteredExpenses.reduce((total, item) => total + parseFloat(item.amount || 0), 0).toFixed(2)}
              </td>
              <td colSpan="3"></td>
            </tr>
          </tfoot>
        </table>
      </Container>

      {/* Modal Edit */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Expense Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Enter expense name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleFormChange}
                placeholder="Enter amount"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={formData.category}
                onChange={handleFormChange}
                placeholder="Enter category"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleFormChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveExpense}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExpensesPage;

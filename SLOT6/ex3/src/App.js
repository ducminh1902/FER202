import logo from './logo.svg';
import './App.css';
// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import GridContent from "./components/GridContent";
import Footer from "./components/Footer";
function App() {
   return (
    <div>
      <Header />
      <Navbar />
      <GridContent />
      <Footer />
    </div>
  );
}

export default App;

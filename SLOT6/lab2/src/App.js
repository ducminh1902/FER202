import React from "react";
import Navbar from "./components/Navbar.js";
import PizzaCarousel from "./components/PizzaCarousel.js";
import Menu from "./components/Menu.js";
import Booking from "./components/Booking.js";
function App() {
  return (
    <div>
      <Navbar />
      <PizzaCarousel />
      <Menu />
      <Booking />
    </div>
  );
}

export default App;

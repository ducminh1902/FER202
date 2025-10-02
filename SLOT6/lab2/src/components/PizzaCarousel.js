import React from "react";

function PizzaCarousel() {
  return (
    <div
      id="pizzaCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ maxHeight: "500px", overflow: "hidden" }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://cdn.tgdd.vn/Files/2022/07/08/1445657/kham-pha-10-quan-pizza-ngon-tai-da-nang-ban-nhat-dinh-phai-thu-202207080712120312.jpg"
            className="d-block w-100"
            alt="Pizza"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h2 className="text-light">Neapolitan Pizza</h2>
            <p className="text-light">
              If you are looking for traditional Italian pizza, the Neapolitan is the best option!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://hoangviettravel.vn/wp-content/uploads/2020/02/snow-min-1-min.jpg"
            className="d-block w-100"
            alt="Cheese Pizza"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h2 className="text-light">Cheese Pizza</h2>
            <p className="text-light">A simple yet delicious choice with plenty of cheese!</p>
          </div>
        </div>
      </div>

      {/* Nút điều hướng */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#pizzaCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#pizzaCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default PizzaCarousel;

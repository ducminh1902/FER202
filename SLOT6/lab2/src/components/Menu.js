import React from "react";

function Menu() {
  return (
    <div className="bg-dark py-5">
      <div className="container">
        <h2 className="text-start text-white mb-5">Our Menu</h2>
        <div className="row justify-content-center">
          {/* Card 1 */}
          <div className="col-md-3 mb-4 d-flex">
            <div className="card w-100 h-100">
              <img
                src="https://img.dominos.vn/cach-lam-banh-pizza-1.jpg"
                className="card-img-top"
                alt="Margherita Pizza"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Margherita Pizza</h5>
                <p className="card-text flex-grow-1">
                  Classic delight with 100% real mozzarella cheese.
                </p>
                <p className="card-text">
                  <strong>$20.00</strong>{' '}
                  <span className="badge bg-danger ms-2">SALE</span>
                </p>
                <button className="btn btn-warning mt-auto">Buy</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 mb-4 d-flex">
            <div className="card w-100 h-100">
              <img
                src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
                className="card-img-top"
                alt="Mushroom Pizza"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Mushroom Pizza</h5>
                <p className="card-text flex-grow-1">
                  Juicy beef patty with melted cheddar cheese.
                </p>
                <p className="card-text">
                  <strong>$25.00</strong>
                </p>
                <button className="btn btn-warning mt-auto">Buy</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3 mb-4 d-flex">
            <div className="card w-100 h-100">
              <img
                src="https://www.pepperbowl.com/wp-content/uploads/2025/02/instant-pot-penne-pasta-recipe.jpg"
                className="card-img-top"
                alt="Hawaiian Pizza"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Hawaiian Pizza</h5>
                <p className="card-text flex-grow-1">
                  Alfredo pasta topped with parmesan.
                </p>
                <p className="card-text">
                  <strong>$30.00</strong>{' '}
                  <span className="badge bg-success ms-2">NEW</span>
                </p>
                <button className="btn btn-warning mt-auto">Buy</button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3 mb-4 d-flex">
            <div className="card w-100 h-100">
              <img
                src="https://cdn.tgdd.vn/Files/2022/07/08/1445657/kham-pha-10-quan-pizza-ngon-tai-da-nang-ban-nhat-dinh-phai-thu-202207080712120312.jpg"
                className="card-img-top"
                alt="Pesto Pizza"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Pesto Pizza</h5>
                <p className="card-text flex-grow-1">
                  Fresh pasta sauce with mozzarella and cherry tomatoes.
                </p>
                <p className="card-text">
                  <strong>$40.00</strong>{' '}
                  <span className="badge bg-danger ms-2">SALE</span>
                </p>
                <button className="btn btn-warning mt-auto">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

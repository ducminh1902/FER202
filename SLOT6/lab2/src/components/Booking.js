import React from "react";

function Booking() {
  return (
    <div  className="bg-dark py-5">
      <div className="container">
        <h2 className="text-white mb-4" style={{textAlign: "center" }}>Book Your Table</h2>
        <form>
          <div className="row mb-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name *"
                style={{ backgroundColor: "#fff", color: "#000" }}
              />
            </div>
            <div className="col-md-4">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email *"
                style={{ backgroundColor: "#fff", color: "#000" }}
              />
            </div>
            <div className="col-md-4">
              <select
                className="form-select"
                style={{ backgroundColor: "#fff", color: "#000" }}
              >
                <option>Select a Service</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Private Event</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Please write your comment"
              style={{ backgroundColor: "#fff", color: "#000" }}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-warning fw-bold">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;

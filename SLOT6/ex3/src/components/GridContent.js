// src/components/GridContent.js
import React from "react";

function GridContent() {
  return (
    <div className="container text-center mt-4">
      <div className="row border bg-secondary bg-opacity-25">
        <div className="col">First col</div>
        <div className="col">Second col</div>
      </div>

      <div className="row border bg-secondary bg-opacity-25">
        <div className="col">col</div>
        <div className="col">col</div>
        <div className="col">col</div>
      </div>

      <div className="row border bg-secondary bg-opacity-25">
        <div className="col">col</div>
        <div className="col">col</div>
        <div className="col">col</div>
      </div>
    </div>
  );
}

export default GridContent;

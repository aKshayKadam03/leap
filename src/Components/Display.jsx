import React from "react";
import "./display.css";

function Display({ current }) {
  return (
    <div className="display">
      <input value={current} />
    </div>
  );
}

export default Display;

import React from "react";
import "./keyboard.css";

function Keyboard({ onClickHandler }) {
  return (
    <div className="keyboard">
      <div className="keys">
        {new Array(10).fill(1).map((_, index) => (
          <div onClick={() => onClickHandler(index)} key={index}>
            {index}
          </div>
        ))}
      </div>
      <div className="actions">
        <div onClick={() => onClickHandler("=")}>=</div>
        <div onClick={() => onClickHandler("+")}>+</div>
        <div onClick={() => onClickHandler("-")}>-</div>
        <div onClick={() => onClickHandler("*")}>*</div>
        <div onClick={() => onClickHandler("/")}>/</div>
      </div>
    </div>
  );
}

export default Keyboard;

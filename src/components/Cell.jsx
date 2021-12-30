import React from "react";
import "./Cell.css";

const Cell = ({ onMouseEnter, numCell }) => {
  return <div className="field__cell" onMouseEnter={onMouseEnter}></div>;
};

export default Cell;

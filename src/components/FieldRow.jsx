import React from "react";
import Cell from "./Cell.jsx";
import "./FieldRow.css";

const onMouseEnterHandler = (e) => {
  if (e.target.style.backgroundColor === "white") {
    e.target.style.backgroundColor = "lightblue";
  } else {
    e.target.style.backgroundColor = "white";
  }
};

const FieldRow = ({ quantity }) => {
  return (
    <div className="field__row">
      {quantity.map((item) => (
        <Cell
          onMouseEnter={(e) => onMouseEnterHandler(e)}
          style={{ backgroundColor: "white" }}
          key={Math.random()}
        />
      ))}
    </div>
  );
};

export default FieldRow;

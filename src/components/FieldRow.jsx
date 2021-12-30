import React from "react";
import Cell from "./Cell.jsx";
import "./FieldRow.css";

const onMouseEnterHandler = (e, num) => {
  if (e.target.style.backgroundColor === "white") {
    e.target.style.backgroundColor = "#03A8F4";
    console.log(num);
  } else {
    e.target.style.backgroundColor = "white";
    console.log(num);
  }
};

const FieldRow = ({ quantity, num }) => {
  return (
    <div className="field__row">
      {quantity.map((item) => (
        <Cell
          numCell={quantity.indexOf(item) + 1}
          onMouseEnter={(e) => onMouseEnterHandler(e, num)}
          style={{ backgroundColor: "white" }}
          key={Math.random()}
        />
      ))}
    </div>
  );
};

export default FieldRow;

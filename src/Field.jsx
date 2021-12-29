import React from "react";
import Cell from "./components/Cell";

const Field = ({ mode }) => {
  return (
    <div>
      {mode.map((row) => (
        <p>Hello</p>
      ))}
    </div>
  );
};

export default Field;

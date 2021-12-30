import React, { useState } from "react";
import FieldRow from "./FieldRow";

const Field = ({ mode }) => {
  console.log(mode);
  let rows = new Array(mode);

  for (let i = 0; i < mode; i++) {
    rows[i] = new Array(mode);
  }
  console.log(rows);

  return (
    <div>
      {rows.map((item) => (
        <FieldRow quantity={rows} />
      ))}
    </div>
  );
};

export default Field;

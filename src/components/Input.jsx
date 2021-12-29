import React, { useState } from "react";
import Field from "../Field";
import Button from "./Button";
import "./Input.css";

const Input = ({ data, width, height }) => {
  const [mode, setMode] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setMode(e.target.value);
  };

  return (
    <div className="input__start">
      <select style={{ width, height }} onChange={(e) => handleChange(e)}>
        <option value="" selected disabled hidden>
          Pick mode
        </option>
        {Object.keys(data).map((item) => (
          <option key={Math.random()} value={data.item}>
            {item}
          </option>
        ))}
      </select>
      <Button children={"start"} />
    </div>
  );
};

export default Input;

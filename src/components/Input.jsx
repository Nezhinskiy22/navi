import React from "react";
import { useState } from "react";
import Button from "./Button";
import "./Input.css";

const Input = ({ data, width, height }) => {
  const [mode, setMode] = useState("");

  const handleChange = (e) => {
    setMode(e.target.value);
    console.log(mode);
  };
  return (
    <div className="input__start">
      <select style={{ width, height }} value={mode} onChange={handleChange}>
        <option value="" selected disabled hidden>
          Pick mode
        </option>
        {Object.keys(data).map((item) => (
          <option key={Math.random()} value={data[item]}>
            {item}
          </option>
        ))}
      </select>
      <Button children={"start"} />
    </div>
  );
};

export default Input;

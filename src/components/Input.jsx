import React, { useState } from "react";
import Field from "./Field";
import Button from "./Button";
import "./Input.css";

const Input = ({ data2, width, height }) => {
  const [mode, setMode] = useState("");
  const [field, setField] = useState(null);

  const changeMode = (e) => {
    let key = e.target.value;
    setMode(data2[key].field);
  };

  const addField = () => {
    setField(<Field mode={mode} />);
  };

  let allCategories = Object.keys(data2);

  return (
    <div className="input__start">
      <div input__header>
        <select style={{ width, height }} value={mode} onChange={changeMode}>
          <option value="" selected disabled hidden>
            Pick mode
          </option>
          {allCategories.map((item) => (
            <option key={Math.random()} value={data2.value}>
              {item}
            </option>
          ))}
        </select>
        <Button children={"start"} onClick={addField} />
      </div>
      <div>{field}</div>
    </div>
  );
};

export default Input;

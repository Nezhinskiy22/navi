import React, { Children } from "react";
import "./Button.css";

const Button = ({ children }) => {
  return (
    <div>
      <button className="button__main" style={{ width: 80, height: 25 }}>
        {children}
      </button>
    </div>
  );
};

export default Button;

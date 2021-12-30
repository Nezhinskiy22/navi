import React, { Children } from "react";
import "./Button.css";

const Button = ({ children, onClick }) => {
  return (
    <div>
      <button
        className="button__main"
        style={{ width: 80, height: 25 }}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

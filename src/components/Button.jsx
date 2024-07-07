// Button.js
import React from "react";

const Button = ({ styles }) => (
  <a 
    href="/new-page"
    target="_blank"
    rel="noopener noreferrer"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Get Started
  </a>
);

export default Button;

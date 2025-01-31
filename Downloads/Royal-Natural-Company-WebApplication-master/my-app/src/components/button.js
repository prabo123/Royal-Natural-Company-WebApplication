import React from "react";

export const Button = ({ children, onClick, className, ...props }) => (
  <button
    className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

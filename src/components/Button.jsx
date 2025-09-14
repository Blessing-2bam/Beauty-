import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 mt-4 
                  bg-pink-300 text-white 
                  hover:bg-pink-600 
                   text-lg font-semibold 
                  transition duration-300 
                  shadow-md hover:shadow-lg
                  flex items-center justify-center
                  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

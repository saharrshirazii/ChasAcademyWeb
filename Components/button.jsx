import React from 'react';

const Button = ({ label, onClick, type = 'button', variant = 'primary' }) => {
  const baseStyle = 'px-4 py-2 rounded font-semibold';
  const variants = {
    primary: `${baseStyle} bg-blue-600 text-white hover:bg-blue-700`,
    secondary: `${baseStyle} bg-gray-200 text-gray-800 hover:bg-gray-300`,
  };

  return (
    <button type={type} onClick={onClick} className={variants[variant]}>
      {label}
    </button>
  );
};

export default Button;
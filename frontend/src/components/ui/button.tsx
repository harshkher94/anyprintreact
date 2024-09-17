import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = (props) => {
  return <button {...props} className={`bg-blue-500 text-white p-2 rounded ${props.className}`} />;
};
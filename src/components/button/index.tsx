import './index.css';

import React, { FC } from 'react';
interface ButtonProps {
  procent?: number;
  isInput?: boolean;
  defaultValue?: number;
  onClick?: () => void;
  isActive?: boolean;
  handleValue?: (key: string, value: number) => void;
}

const Button: FC<ButtonProps> = ({ isActive, procent, isInput, defaultValue, onClick, handleValue }) => {
  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (handleValue) {
      handleValue('tipProcent', parseInt(event.target.value));
    }
  };

  return isInput == false || isInput == undefined ? (
    <button
      onClick={() => {
        if (onClick !== undefined) {
          onClick?.();
        }
      }}
      className={`button ${isActive ? 'buttonClicked' : ''}`}
    >
      {procent}%
    </button>
  ) : (
    <input onChange={handleInputValue} value={defaultValue} className="buttonInput"></input>
  );
};

export default Button;

import './index.css';

import React, { FC } from 'react';

import Button from '../button';

type Buttons = {
  button5: boolean;
  button10: boolean;
  button15: boolean;
  button25: boolean;
  button50: boolean;
};

interface ButtonAreaProps {
  defaultValue: number;
  handleValue: (key: string, value: number) => void;
  isPressed: Buttons;
  handleClick: (clickedButton: string) => void;
}

const ButtonArea: FC<ButtonAreaProps> = ({ defaultValue, handleValue, isPressed, handleClick }) => {
  return (
    <div className="buttonsContainer">
      <div className="procentText">
        <b>Select Tip %</b>
      </div>
      <div className="buttons">
        <Button
          isActive={isPressed.button5}
          onClick={() => {
            handleClick('button5');
            handleValue('tipProcent', 5);
          }}
          procent={5}
        />
        <Button
          isActive={isPressed.button10}
          onClick={() => {
            handleClick('button10');
            handleValue('tipProcent', 10);
          }}
          procent={10}
        />
        <Button
          isActive={isPressed.button15}
          onClick={() => {
            handleClick('button15');
            handleValue('tipProcent', 15);
          }}
          procent={15}
        />
        <Button
          isActive={isPressed.button25}
          onClick={() => {
            handleClick('button25');
            handleValue('tipProcent', 25);
          }}
          procent={25}
        />
        <Button
          isActive={isPressed.button50}
          onClick={() => {
            handleClick('button50');
            handleValue('tipProcent', 50);
          }}
          procent={50}
        />
        <Button handleValue={handleValue} defaultValue={defaultValue} isInput />
      </div>
    </div>
  );
};

export default ButtonArea;

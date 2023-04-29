import './index.css';

import React, { FC } from 'react';

interface InputProps {
  field: string;
  error: boolean;
  summary: string;
  defaultValue: number;
  handleValue: (key: string, value: number) => void;
}

const Input: FC<InputProps> = ({ field, error, summary, defaultValue, handleValue }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleValue(field === 'bill' ? 'bill' : 'numberOfPeople', parseInt(event.target.value));
  };

  return (
    <div className="inputContainer">
      <div className="textInput">
        <div>
          <b>{summary}</b>
        </div>
        {error === true && field == 'numberOfPeople' && defaultValue == 0 ? (
          <div className="errorText">Cant be zero</div>
        ) : (
          ''
        )}
      </div>
      <div>
        <input onChange={handleChange} value={isNaN(defaultValue) ? 0 : defaultValue} type="text" />
      </div>
    </div>
  );
};

export default Input;

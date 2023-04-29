import './index.css';

import React, { FC } from 'react';
interface ResultInterface {
  value: number;
  text: string;
}
const Result: FC<ResultInterface> = ({ text, value }) => {
  return (
    <div className="resultContainer">
      <div className="text">
        <p>
          <h5>{text}</h5>
          <p>/ person</p>
        </p>
      </div>
      <div className="result">
        <h1>${isNaN(value) ? 0 : value}</h1>
      </div>
    </div>
  );
};

export default Result;

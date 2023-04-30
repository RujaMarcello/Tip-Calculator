import './App.css';

import React, { useEffect, useState } from 'react';

import ButtonArea from './components/button-area';
import Input from './components/input';
import Result from './components/result';

type Buttons = {
  button5: boolean;
  button10: boolean;
  button15: boolean;
  button25: boolean;
  button50: boolean;
};

function App() {
  const [results, setResults] = useState({
    tipAmount: 0,
    total: 0,
  });

  const [isPressed, setIsPressed] = useState<Buttons>({
    button5: false,
    button10: false,
    button15: false,
    button25: false,
    button50: false,
  });

  type Values = {
    bill: number;
    tipProcent: number;
    numberOfPeople: number;
  };
  const handleClick = (clickedButton: string) => {
    setIsPressed({
      button5: false,
      button10: false,
      button15: false,
      button25: false,
      button50: false,
      [clickedButton]: true,
    });
  };

  const [values, setValues] = useState<Values>({
    bill: 0,
    tipProcent: 0,
    numberOfPeople: 0,
  });

  const resetValues = () => {
    setValues({
      bill: 0,
      tipProcent: 0,
      numberOfPeople: 0,
    });
    setIsPressed({
      button5: false,
      button10: false,
      button15: false,
      button25: false,
      button50: false,
    });
  };

  const handleValue = (key: string, value: number) => {
    setValues((prevState) => ({ ...prevState, [key]: value }));
  };

  useEffect(() => {
    setResults({
      tipAmount: parseFloat(((values.tipProcent / 100) * values.bill).toFixed(2)),
      total: parseFloat((values.bill / values.numberOfPeople + (values.tipProcent / 100) * values.bill).toFixed(2)),
    });
  }, [values, setValues]);

  return (
    <div className="container">
      <div className="leftContainer">
        <Input
          field={'bill'}
          handleValue={handleValue}
          defaultValue={values.bill}
          summary={'Bill'}
          error={false}
        ></Input>
        <ButtonArea
          handleClick={handleClick}
          isPressed={isPressed}
          handleValue={handleValue}
          defaultValue={values.tipProcent}
        />
        <Input
          field={'numberOfPeople'}
          handleValue={handleValue}
          defaultValue={values.numberOfPeople}
          summary={'Number of People'}
          error={true}
        ></Input>
      </div>
      <div className="rightContainer">
        <Result value={results.tipAmount} text={'Tip Amount'} />
        <Result value={results.total} text={'Total'}></Result>
        <button onClick={resetValues} className="rightButton">
          <b>RESET</b>
        </button>
      </div>
    </div>
  );
}

export default App;

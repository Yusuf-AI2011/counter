import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((count) => {
      if (count < 99) {
        return count + 1;
      } else {
        return 0;
      }
    });
  }
  function dicrement() {
    setCount((count) => {
      if (count > 0) {
        return count - 1;
      } else {
        return count;
      }
    });
  }
  function reset() {
    setCount((count) => {
      return 0;
    });
  }
  console.log(count);

  return (
    <div className="counter">
      <h1 className="showResult">{count}</h1>
      <div className="buttons">
        <button className="buttonInc button" onClick={increment}>
          +
        </button>
        <button className="buttonDec button" onClick={dicrement}>
          -
        </button>
        <button className="buttonReset button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

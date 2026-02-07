import React from "react";
import "./App.css";
import Counter from "./components/counter/counter";

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Counter />
      </div>
    </div>
  );
};

export default App;

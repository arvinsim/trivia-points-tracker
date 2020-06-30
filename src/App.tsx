import React, { useState } from "react";
import "./App.css";

function App() {
  const [points, setPoints] = useState<number>(0);
  const increment = (points: number) => {
    setPoints(points + 1);
  };
  const decrement = (points: number) => {
    let result = points - 1;
    if (result < 0) {
      return;
    }
    setPoints(result);
  };

  return (
    <div className="App">
      <h1>Trivia Points Tracker</h1>
      <input value={points} />
      <button onClick={() => increment(points)}>Up</button>
      <button onClick={() => decrement(points)}>Down</button>
    </div>
  );
}

export default App;

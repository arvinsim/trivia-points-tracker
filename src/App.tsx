import React, { useState } from "react";
import "./App.css";

function App() {
  const [points, setPoints] = useState<number>(0);
  const [messages, setMessages] = useState<string[]>([]);

  const increment = (points: number) => {
    const result = points + 1;
    setPoints(result);
    setMessages([`${points} was incremented to ${result}`, ...messages]);
  };
  const decrement = (points: number) => {
    let result = points - 1;
    if (result < 0) {
      return;
    }
    setPoints(result);
    setMessages([`${points} was decremented to ${result}`, ...messages]);
  };

  return (
    <div className="App">
      <h1>Trivia Points Tracker</h1>
      <div>
        <input value={points} />
        <button onClick={() => increment(points)}>Up</button>
        <button onClick={() => decrement(points)}>Down</button>
      </div>
      <div>
        {messages.map((message) => {
          return <div>{message}</div>;
        })}
      </div>
    </div>
  );
}

export default App;

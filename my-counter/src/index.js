import { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  //const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);

  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    clicks: 0,
    message: "Hello world",
  });

  const handleClickLeft = () => {
    const newCountersState = {
      ...counters,
      left: counters.left + 1,
      clicks: counters.clicks + 1,
    };
    setCounters(newCountersState);
  };

  const handleClickRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1,
      clicks: counters.clicks + 1,
    });
  };

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {counters.right}
      <p>Clicks totales: {counters.clicks}</p>
      <p>{counters.message}</p>
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

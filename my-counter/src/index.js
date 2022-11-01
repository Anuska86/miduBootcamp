import { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const WarningNotUsed = () => {
  return <h3>The counter has not been used yet</h3>;
};

const ListofClicks = ({ clicks }) => {
  return <p>{clicks.join(", ")}</p>;
};

const App = () => {
  //const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);

  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
  });

  const [clicks, setClicks] = useState([]);

  const handleClickLeft = () => {
    const newCountersState = {
      ...counters,
      left: counters.left + 1,
    };
    setCounters(newCountersState);
    setClicks((prevClicks) => [...prevClicks, "L"]);
  };

  const handleClickRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1,
    });

    setClicks((prevClicks) => [...prevClicks, "R"]);
  };

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {counters.right}
      <p>Clicks totales: {clicks.length}</p>
      {clicks.length === 0 ? (
        <WarningNotUsed />
      ) : (
        <ListofClicks clicks={clicks} />
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

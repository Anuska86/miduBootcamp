import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const Counter = ({ number }) => {
  return <h1>{number}</h1>;
};

const App = (props) => {
  const [counter, setCounter] = useState(0);

  console.log("render");

  const handleClick = () => {
    //setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleClickReset = () => {
    setCounter(0);
  };

  const isEven = counter % 2 === 0;
  const evenMessage = isEven ? "Is an even number" : "Is an odd number";

  return (
    <div>
      <p>The value of the counter is: </p>
      <Counter number={counter} />
      <p>{evenMessage}</p>
      <button onClick={handleClick}>Increase</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);

import "./App.css";
import Message from "./message.js";

const Description = () => {
  return <p>This is the app</p>;
};

const App = () => {
  return (
    <div className="App">
      <Message color="blue" message="We are working" />
      <Message color="red"message="In a React course" />
      <Message color="green"message="Enjoy!" />
      <Description />
    </div>
  );
};

export default App;

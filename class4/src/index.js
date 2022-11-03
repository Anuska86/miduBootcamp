import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2020-11-01T 13:17:30.098Z",
    important: true,
    categories: ["sports", "hobby"],
  },

  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2020-11-01T 14:17:30.098Z",
    important: false,
  },

  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2020-11-01T 15:17:30.098Z",
    important: true,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App notes={notes}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


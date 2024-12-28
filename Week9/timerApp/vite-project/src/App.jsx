import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counterVisible, setCounterVisible] = useState(true);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCounterVisible((c) => !c);
  //   }, 5000);
  // }, []);

  return <div>{counterVisible && <Counter></Counter>}</div>;
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let clock = setInterval(function () {
      setCount(count + 1);
    }, 1000);

    return function () {
      console.log("Clearned");
      clearInterval(clock);
    };
  }, [count]);

  return <h1>{count}</h1>;
}

export default App;

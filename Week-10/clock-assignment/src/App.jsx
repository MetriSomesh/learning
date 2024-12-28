import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const timer = useRef();
  function onStartClick() {
    let value = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    timer.current = value;
  }

  function onStopClick() {
    clearInterval(timer.current);
  }
  return (
    <>
      <div>
        {count}
        <br></br>
        <button onClick={onStartClick}>Start</button>
        <button onClick={onStopClick}>Stop</button>
      </div>
    </>
  );
}

export default App;

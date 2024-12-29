import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect, memo } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 3000);
  }, []);
  return (
    <div>
      <CurrenCount count={count} />
      <Increase />
      <Decrease />
    </div>
  );
}

const Increase = memo(() => {
  function increase() {}

  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
});

const Decrease = memo(() => {
  function decrease() {}

  return (
    <div>
      <button onClick={decrease}>Decrease</button>;
    </div>
  );
});

// const MemoisedCurrentCount = memo(CurrenCount);
const CurrenCount = memo(function ({ count }) {
  return <div>{count}</div>;
});
export default App;

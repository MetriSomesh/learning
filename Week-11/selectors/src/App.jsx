import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil";
import { counterAtom, evenSelector } from "./store/atoms/counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </div>
  );
}

function Counter() {
  return (
    <div>
      <Buttons />
      <CurrentCounter />
      <IsEven />
    </div>
  );
}

function Buttons() {
  return (
    <div>
      <Increase />
      <Decrease />
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);

  return (
    <div>
      <button
        onClick={() => {
          setCount((c) => c + 2);
        }}
      >
        Increase
      </button>
    </div>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);

  return (
    <div>
      <button
        onClick={() => {
          setCount((c) => c - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

function CurrentCounter() {
  const count = useRecoilValue(counterAtom);

  return <div>Current Count is: {count}</div>;
}

function IsEven() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "Even" : "Odd"}</div>;
}
export default App;

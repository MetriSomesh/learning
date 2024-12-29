import { createContext, useContext, useState } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { counterAtom } from "./store/atoms/counter";

// const CountContext = createContext();

// function CountContextProvider({ children }) {
//   const [count, setCount] = useState(0);

//   return (
//     <CountContext.Provider value={{ count, setCount }}>
//       {children}
//     </CountContext.Provider>
//   );
// }
function App() {
  return (
    <>
      {/* <CountContextProvider> */}
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
      {/* </CountContextProvider> */}
    </>
  );
}

function Counter() {
  return (
    <div>
      <IncreateBtn />
      <DecreaseBtn />
      <CurrentCount />
    </div>
  );
}

function CurrentCount() {
  // const { count } = useContext(CountContext);
  const count = useRecoilValue(counterAtom);
  return <div>Current Count {count}</div>;
}
function IncreateBtn() {
  // const { setCount, count } = useContext(CountContext);
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount((c) => c + 1);
  }
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

function DecreaseBtn() {
  // const { setCount, count } = useContext(CountContext);
  const inCount = useSetRecoilState(counterAtom);
  return (
    <div>
      <button onClick={() => inCount((c) => c - 1)}>Decrease</button>
    </div>
  );
}

export default App;

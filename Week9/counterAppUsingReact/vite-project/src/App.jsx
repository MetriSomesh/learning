import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonComp
        count={count}
        setCount={setCount}
        onClickHandler={onClickHandler}
      ></ButtonComp>
    </>
  );
}

function onClickHandler(props) {
  props.setCount(props.count + 1);
}
function ButtonComp(props) {
  return <button onClick={props.onClickHandler}>Counter {props.count}</button>;
}

export default App;

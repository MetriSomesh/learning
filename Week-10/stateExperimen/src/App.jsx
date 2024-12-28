import { useState, createContext, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const BulbContext = createContext();

function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <BulbContext.Provider
      value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn,
      }}
    >
      {children}
    </BulbContext.Provider>
  );
}
function App() {
  return (
    <>
      <BulbProvider>
        <LightBulb />
      </BulbProvider>
    </>
  );
}

function LightBulb() {
  return (
    <div>
      <BulbState />
      <ToggleBlubStae />
    </div>
  );
}

function BulbState() {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? "Bulb On " : "Bulb Off"}</div>;
}

function ToggleBlubStae() {
  const { setBulbOn } = useContext(BulbContext);
  function handleToggle() {
    setBulbOn((currentState) => !currentState);
  }

  return <button onClick={handleToggle}>Toggle</button>;
}
export default App;

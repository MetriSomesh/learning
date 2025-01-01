import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();
  async function sendMessage() {
    if (!socket) {
      return;
    }
    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    //@ts-ignore
    setSocket(ws);
    ws.onerror = () => {};

    ws.onclose = () => {};

    ws.onmessage = (event) => {
      alert(event.data);
    };
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Message" />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;

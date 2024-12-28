import { useRef, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dash" element={<Landing />}></Route>
            <Route path="/neet/12" element={<Class11Program />}></Route>
            <Route path="/neet/11" element={<Class11 />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <>
      <Link to="/dash">landing</Link>|<Link to="/neet/12">CLass12</Link>|
      <Link to="/neet/11">CLass11</Link>
      <Outlet />
    </>
  );
}
function Class11Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }
  return (
    <>
      <button onClick={redirectUser}>GO to home</button>
    </>
  );
}

function NotFound() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }
  return (
    <>
      <div>Page not found</div>
      <button onClick={redirectUser}>GO to home</button>
    </>
  );
}

function Landing() {
  return <div>WELCOME HERE</div>;
}

export default App;

function Class11() {
  const inputRef = useRef();

  function focusOnInput() {
    inputRef.current.focus();
  }
  return (
    <>
      <div>
        <input ref={inputRef} type="text"></input>
        <input type="text"></input>
        <button onClick={focusOnInput}>submit</button>
      </div>
    </>
  );
}

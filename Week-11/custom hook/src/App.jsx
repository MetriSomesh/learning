import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useGetPosts } from "../hooks/useGetPosts";
import { useFetch } from "../hooks/useFetch";
import { usePrev } from "../hooks/usePrev";
import { useDebounce } from "../hooks/useDebounce";

// function useCouner() {
//   const [count, setCount] = useState(0);
//   function increaseCount() {
//     setCount(count + 1);
//   }
//   return {
//     count: count,
//     increaseCount: increaseCount,
//   };
// }
function App() {
  // const postTitle = useGetPosts();
  // return (
  //   <>
  //     <button onClick={increaseCount}>Increase {count}</button>
  //   </>
  // );
  // return <>{postTitle}</>;
  // const [currentPost, setCurrentPost] = useState(1);
  // const { data, loading } = useFetch(
  //   "https://jsonplaceholder.typicode.com/posts/" + currentPost
  // );

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setCurrentPost(1);
  //       }}
  //     >
  //       1
  //     </button>
  //     <button onClick={() => setCurrentPost(2)}>2</button>
  //     <div>{JSON.stringify(data)}</div>
  //   </div>
  // );

  // const [state, setState] = useState(0);
  // const prev = usePrev(state);

  // return (
  //   <>
  //     <p>{state}</p>
  //     <button
  //       onClick={() => {
  //         setState(state + 1);
  //       }}
  //     >
  //       Click me
  //     </button>

  //     <p>The previous value : {prev}</p>
  //   </>
  // );

  function makeRequest() {
    console.log("REQuest snet");
  }

  const deBounced = useDebounce(makeRequest);

  return (
    <>
      <input onChange={deBounced} type="text"></input>
    </>
  );
}

export default App;

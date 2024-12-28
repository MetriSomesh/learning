import { useRef } from "react";
import { useEffect } from "react";

let clock;
export function useDebounce(fn) {
  //   useEffect(() => {
  //     let clock = setTimeout(fn, 5000);
  //     return () => {
  //       clearTimeout(clock);
  //     };
  //   }, [fn]);
  const currentClock = useRef();
  const lasFn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(fn, 2000);
  };
  return lasFn;
}

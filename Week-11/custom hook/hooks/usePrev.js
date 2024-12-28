import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export function usePrev(value, initial) {
  const ref = useRef({ target: value, previous: initial });

  if (ref.current.target !== value) {
    ref.current.previous = ref.current.target;
    ref.current.target = value;
  }
  //   useEffect(() => {
  //     ref.current = value;
  //   }, [value]);

  return ref.current.previous;
}

import { useEffect } from "react";
import { useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  async function getDetails() {
    setLoading(true);
    const res = await fetch(url);
    const json = await res.json();
    setData(json);
    setLoading(false);
  }
  useEffect(() => {
    getDetails();
  }, [url]);

  console.log("DATA: ", data);
  return { data, loading };
}

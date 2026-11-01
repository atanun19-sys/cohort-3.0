import React, { useContext, useEffect } from "react";
import { Mystore } from "../context/MyContext";

const Counter = () => {
  let { count, setCount } = useContext(Mystore);
  useEffect(() => {
    document.title = `Mycart-${count}`;
  }, [count]);
  return (
    <div>
      <h1>Counter-{count} </h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;

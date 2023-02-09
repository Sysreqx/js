import React from "react";
import Counter from "./counter";

const CountersList = () => {
  let counters = [{}, {}, {}];
  return (
    <>
      {counters.map((c) => (
        <Counter />
      ))}
    </>
  );
};

export default CountersList;

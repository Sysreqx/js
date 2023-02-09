import React from "react";
import Counter from "./counter";

const CountersList = () => {
  let counters = [{id: 0, value: 0}, {id: 0, value: 3}, {id: 0, value: 0}];
  return (
    <>
      {counters.map((c) => (
        <Counter key={c.id} value={c.value} />
      ))}
    </>
  );
};

export default CountersList;

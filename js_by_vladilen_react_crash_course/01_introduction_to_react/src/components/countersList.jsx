import React from "react";
import Counter from "./counter";

const CountersList = () => {
  let counters = [
    { id: 0, value: 0, name: "Вещь" },
    { id: 1, value: 3, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 1, name: "Набор бичугана" },
  ];
  return (
    <>
      {counters.map((c) => (
        <Counter key={c.id} value={c.value} name={c.name} />
      ))}
    </>
  );
};

export default CountersList;

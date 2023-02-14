import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  let [counters, setCounters] = useState([
    { id: 0, value: 0, name: "Вещь" },
    { id: 1, value: 3, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 1, name: "Набор бичугана" },
  ]);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  return (
    <>
      {counters.map((c) => (
        <Counter
          key={c.id}
          id={c.id}
          value={c.value}
          name={c.name}
          onDelete={handleDelete}
        />
      ))}
    </>
  );
};

export default CountersList;

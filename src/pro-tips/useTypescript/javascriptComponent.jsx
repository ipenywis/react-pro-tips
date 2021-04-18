import React, { useState } from "react";

const FruitsList = ["Orange", "Apple", "Coconut"];

export function JavascriptComponent(props) {
  const { message } = props;
  const [selectedFruit, setSelectedFruit] = useState(null);

  const selectFruit = (fruit) => {
    setSelectedFruit(fruit);
  };

  return (
    <div>
      {selectedFruit ? (
        <h2>
          {message || "Yuum you like "} {selectedFruit}
        </h2>
      ) : (
        <h2>Which Fruit you like?</h2>
      )}
      <ul>
        {FruitsList.map((fruit, idx) => (
          <li key={idx} onClick={() => selectFruit(fruit)}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}

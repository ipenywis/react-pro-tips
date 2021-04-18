import React, { useState } from "react";

interface IJavascriptComponentProps {
  message?: string;
}

const FruitsList: string[] = ["Orange", "Apple", "Coconut"];

export function JavascriptComponent(props: IJavascriptComponentProps) {
  const { message } = props;
  const [selectedFruit, setSelectedFruit] = useState<string | null>(null);

  const selectFruit = (fruit: string) => {
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

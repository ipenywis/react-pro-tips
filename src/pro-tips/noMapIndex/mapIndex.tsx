import React from "react";

interface IStar {
  name: string;
}

const Stars: IStar[] = [
  { name: "Polaris" },
  { name: "Sirius" },
  { name: "Rigle" },
  { name: "Vega" },
];

export function MapIndex() {
  return (
    <ul>
      {Stars.map((star, idx) => (
        <li key={idx}>{star.name}</li>
      ))}
    </ul>
  );
}

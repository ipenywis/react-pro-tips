import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";

interface IStar {
  name: string;
  id?: string;
}

const Stars: IStar[] = [
  { name: "Polaris" },
  { name: "Sirius" },
  { name: "Rigle" },
  { name: "Vega" },
];

export function UnqiueIndex() {
  const [preparedStars, setPreparedStars] = useState<IStar[]>([]);

  const prepareListWithIds = () => {
    const newStars = Stars.map((star) => ({ ...star, id: nanoid() }));

    setPreparedStars(newStars);
  };

  useEffect(() => {
    prepareListWithIds();
  }, []);

  if (!preparedStars || preparedStars.length === 0) return null;

  return (
    <ul>
      {preparedStars.map((star) => (
        <li key={star.id}>{star.name}</li>
      ))}
    </ul>
  );
}

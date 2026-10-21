import { useState } from "react";

// When it comes to typescript states, you can't assign a type
export default function NewCounter() {
  //This would be the only way it could work,
  // as this can be assigned to the variable
  // as a type, but is unnecessary
  //  type specialNumber = number;
  const [newCounter, setNewCounter] = useState(0);
  const limitHigh: number = 10;
  const limitLow: number = 0;

  return (
    <div>
      <button
        onClick={() => newCounter > limitLow && setNewCounter(newCounter - 1)}
      >
        -
      </button>
      <p>{newCounter}</p>
      <button
        onClick={() => newCounter < limitHigh && setNewCounter(newCounter + 1)}
      >
        +
      </button>
    </div>
  );
}

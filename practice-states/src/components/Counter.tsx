import { useState } from "react"; // Hook

export default function Counter() {
  // Requires the storage variable and a
  // setter function in a nameless array
  // Use state holds the initial value
  // to hold in the state
  const [counter, setCounter] = useState(0);

  // onClick has a callback function denoted by the () =>
  // and it calls the setCounter setter function in this case
  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

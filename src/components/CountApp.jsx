import { useState } from "react";

function CountApp() {
    const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Sumar</button>
      <span>{count}</span>

      <button onClick={() => setCount((count) => count - 1)}>Restar</button>
    </>
  );
}

export default CountApp;

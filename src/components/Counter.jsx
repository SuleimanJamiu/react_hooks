import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="counter-card">
      <h2>Counter</h2>
      <p className="count-display">Current count: {count}</p>
      <div className="button-row">
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          Increment
        </button>
        <button type="button" onClick={() => setCount((prev) => prev - 1)}>
          Decrement
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </section>
  );
}

export default Counter;

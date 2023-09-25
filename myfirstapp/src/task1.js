import React, { useState } from 'react';

function Counter() {
  // Step 3: Create a state variable for the count
  const [count, setCount] = useState(0);

  // Step 4: Define functions to increment and decrement the count
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      {/* Step 5: Render the count and buttons */}
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
import React, { useState } from "react";

import Header from "nav/Header";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header count={count} onClear={() => setCount(0)} />
      <div>Name: host</div>
      <div>Count: {count}</div>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default App;

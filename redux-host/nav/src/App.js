import React from "react";

import { useCount } from "host/store";
import Header from "./Header";

const App = () => {
  const [count, setCount] = useCount();
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div>Name: nav</div>
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

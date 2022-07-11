// @ts-ignore
import { useCounterStoreImplementation, useCounterController } from "core";
import React from "react";

function App() {
  const store = useCounterStoreImplementation();
  const {
    count,
    canDecrement,
    isLoading,
    getCounter,
    incrementCounter,
    decrementCounter,
  } = useCounterController(store);

  React.useEffect(() => {
    getCounter();
  }, [getCounter]);

  return (
    <div className="App">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <button onClick={decrementCounter} disabled={!canDecrement}>
            dec
          </button>
          <div>{count}</div>
          <button onClick={incrementCounter}>inc</button>
        </>
      )}
    </div>
  );
}

export default App;

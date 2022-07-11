import { useCounterController, useCounterStoreImplementation } from "core";
import React from "react";

function App() {
  const store = useCounterStoreImplementation();
  const {
    count,
    shouldDisableButton,
    shouldShowSpinner,
    getCounter,
    incrementCounter,
    decrementCounter,
  } = useCounterController(store);

  React.useEffect(() => {
    getCounter();
  }, [getCounter]);

  return (
    <div className="App">
      {shouldShowSpinner ? (
        <div>Loading...</div>
      ) : (
        <>
          <button onClick={decrementCounter} disabled={!shouldDisableButton}>
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

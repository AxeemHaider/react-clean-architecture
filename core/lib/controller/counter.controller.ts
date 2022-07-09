import React from "react";
import { ICounterStore } from "../domain/counter.store";
import { decrementCounterUseCase } from "../useCases/decrementCounter.usecase";
import { getCounterUseCase } from "../useCases/getCounter.usecase";
import { incrementCounterUseCase } from "../useCases/incrementCounter.usecase";

export const useCounterController = (store: ICounterStore) => {
  // Get Counter
  const getCounter = React.useCallback(() => {
    getCounterUseCase({ loadInitialCounter: store.loadInitialCounter });
  }, [store.loadInitialCounter]);

  // Increment Counter
  const incrementCounter = React.useCallback(() => {
    incrementCounterUseCase({
      counter: store.counter,
      setCounter: store.setCounter,
      updateCounter: store.updateCounter,
    });
  }, [store.counter, store.setCounter, store.updateCounter]);

  // Decrement Counter
  const decrementCounter = React.useCallback(() => {
    decrementCounterUseCase({
      counter: store.counter,
      setCounter: store.setCounter,
      updateCounter: store.updateCounter,
    });
  }, [store.counter, store.setCounter, store.updateCounter]);

  return {
    count: store.counter?.value,
    shouldShowSpinner: typeof store.counter === "undefined" || store.isLoading,
    shouldDisableButton: store.counter?.value === 0,
    getCounter,
    incrementCounter,
    decrementCounter,
  };
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICounterEntity } from "../domain/counter.entity";
import { ICounterStore } from "../domain/counter.store";
import {
  getCounterAction,
  setCounterAction,
  updateCounterAction,
} from "./counter.actions";
import { CounterStoreState } from "./counter.reducer";

const counterSelector = (state: any) => state.counter;

export const useCounterStoreImplementation = (): ICounterStore => {
  const { counter, isLoading, isUpdating } = useSelector<
    any,
    CounterStoreState
  >(counterSelector);
  const dispatch = useDispatch();

  const setCounter = React.useCallback(
    (counter: ICounterEntity) => setCounterAction(counter)(dispatch),
    [dispatch]
  );

  const loadInitialCounter = React.useCallback(
    () => getCounterAction()(dispatch),
    [dispatch]
  );

  const updateCounter = React.useCallback(
    (counter: ICounterEntity) => updateCounterAction(counter)(dispatch),
    [dispatch]
  );

  return {
    counter,
    isLoading,
    isUpdating,
    setCounter,
    loadInitialCounter,
    updateCounter,
  };
};

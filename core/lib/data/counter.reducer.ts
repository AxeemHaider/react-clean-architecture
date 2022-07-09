import { ICounterStore } from "../domain/counter.store";
import * as actionTypes from "./counter.actionTypes";

export type CounterStoreState = Omit<
  ICounterStore,
  "loadInitialCounter" | "setCounter" | "updateCounter"
>;

const INITIAL_STATE: CounterStoreState = {
  counter: undefined,
  isLoading: false,
  isUpdating: false,
};

export const counterReducer = (
  state: CounterStoreState = INITIAL_STATE,
  action: any
) => {
  switch (action.type) {
    case actionTypes.SET_COUNTER:
      return { ...state, counter: action.counter };
    case actionTypes.GET_COUNTER:
      return { ...state, isLoading: true };
    case actionTypes.GET_COUNTER_SUCCESS:
      return { ...state, isLoading: false, counter: action.counter };
    case actionTypes.UPDATE_COUNTER:
      return { ...state, isUpdating: true };
    case actionTypes.UPDATE_COUNTER_SUCCESS:
      return { ...state, isUpdating: false };
    default:
      return state;
  }
};

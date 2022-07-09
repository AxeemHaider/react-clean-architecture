import { decrement } from "../domain/counter.model";
import {
  UpdateCounterStore,
  updateCounterUseCase,
} from "./updateCounter.usecase";

export const decrementCounterUseCase = (store: UpdateCounterStore) => {
  return updateCounterUseCase(store, decrement);
};

import { increment } from "../domain/counter.model";
import {
  UpdateCounterStore,
  updateCounterUseCase,
} from "./updateCounter.usecase";

export const incrementCounterUseCase = (store: UpdateCounterStore) => {
  return updateCounterUseCase(store, increment);
};

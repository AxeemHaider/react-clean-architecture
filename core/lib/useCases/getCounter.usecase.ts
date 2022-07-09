import { ICounterStore } from "../domain/counter.store";

type GetCounterStore = Pick<ICounterStore, "loadInitialCounter">;

export const getCounterUseCase = (store: GetCounterStore) => {
  store.loadInitialCounter();
};

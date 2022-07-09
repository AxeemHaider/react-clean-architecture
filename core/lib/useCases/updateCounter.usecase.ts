import debounce from "lodash.debounce";
import { ICounterEntity } from "../domain/counter.entity";
import { ICounterStore } from "../domain/counter.store";

export type UpdateCounterStore = Pick<
  ICounterStore,
  "counter" | "setCounter" | "updateCounter"
>;

const debounceTask = debounce((task) => Promise.resolve(task()), 500);

export const updateCounterUseCase = (
  store: UpdateCounterStore,
  updateBy: (counter: ICounterEntity) => ICounterEntity
) => {
  const updatedCounter = store.counter
    ? updateBy(store.counter)
    : store.counter;

  if (updatedCounter) {
    store.setCounter(updatedCounter);

    return debounceTask(() => store.updateCounter(updatedCounter));
  }
};

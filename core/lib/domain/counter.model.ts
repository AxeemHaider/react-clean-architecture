import { ICounterEntity } from "./counter.entity";

// create
export const create = (count: ICounterEntity["value"]) => ({ value: count });

// increment
export const increment = (counter: ICounterEntity) => ({
  value: counter.value + 1,
});

// decrement
export const decrement = (counter: ICounterEntity) => ({
  value: Math.max(counter.value - 1, 0),
});

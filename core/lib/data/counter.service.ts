import { resolve } from "path";
import { ICounterEntity } from "../domain/counter.entity";
import { create } from "../domain/counter.model";

let count = 0;

export const getCounter = (): Promise<ICounterEntity> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(create(count));
    }, 1000);
  });
};

export const updateCounter = (
  counter: ICounterEntity
): Promise<ICounterEntity> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      count = counter.value;
      resolve(create(count));
    }, 1000);
  });
};

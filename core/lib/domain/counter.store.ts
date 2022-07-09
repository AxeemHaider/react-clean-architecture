import { ICounterEntity } from "./counter.entity";

export interface ICounterStore {
  // State
  counter: ICounterEntity | undefined;
  isLoading: boolean;
  isUpdating: boolean;

  // Actions
  loadInitialCounter(): Promise<ICounterEntity>;
  setCounter(counter: ICounterEntity): void;
  updateCounter(counter: ICounterEntity): Promise<ICounterEntity | undefined>;
}

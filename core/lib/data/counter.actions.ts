import { ICounterEntity } from "../domain/counter.entity";
import * as actionTypes from "./counter.actionTypes";
import { getCounter, updateCounter } from "./counter.service";

// Set Counter
export const setCounterAction =
  (counter: ICounterEntity) => (dispatch: any) => {
    dispatch({ type: actionTypes.GET_COUNTER, counter });
  };

// get Counter
export const getCounterAction = () => (dispatch: any) => {
  dispatch({ type: actionTypes.GET_COUNTER });

  return getCounter().then((counter) => {
    dispatch({ type: actionTypes.GET_COUNTER_SUCCESS, counter });

    return counter;
  });
};

// update counter
export const updateCounterAction =
  (counter: ICounterEntity) => (dispatch: any) => {
    dispatch({ type: actionTypes.UPDATE_COUNTER });

    return updateCounter(counter).then((counter) => {
      dispatch({ type: actionTypes.UPDATE_COUNTER_SUCCESS, counter });

      return counter;
    });
  };

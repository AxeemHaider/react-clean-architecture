import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import * as core from "core";

const rootReducer = combineReducers({
  counter: core.counterReducer,
});

const appStoreImplementation = createStore(rootReducer, applyMiddleware(thunk));

type AppRootState = ReturnType<typeof appStoreImplementation.getState>;

export { appStoreImplementation };
export type { AppRootState };

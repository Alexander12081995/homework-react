import {createStore} from "redux";
import {reducer} from "./reducer";

export * from './actionsCreator';
export * from './selectors';

export const store = createStore(reducer)

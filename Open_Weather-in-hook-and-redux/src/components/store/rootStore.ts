import { reducer } from './weather';
import {applyMiddleware, createStore} from "redux";
import Thunk from 'redux-thunk';




export const store = createStore(reducer, applyMiddleware(Thunk))

export type RootStore = ReturnType<typeof store.getState>

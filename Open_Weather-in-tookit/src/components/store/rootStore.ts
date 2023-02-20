import { reducer } from './weather';
import {configureStore} from "@reduxjs/toolkit";


export const store = configureStore({reducer: reducer})

export type RootStore = ReturnType<typeof store.getState>

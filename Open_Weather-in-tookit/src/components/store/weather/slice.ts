import {Weather} from "../../../types/Weather";
import {LOAD_STATUSES} from "../../../types/loadStatus";
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {getWeather} from '../../../api';

const SLICE_NAME = 'weather';

const fetchWeather = createAsyncThunk(SLICE_NAME, getWeather);

export interface Store {
    data: Weather | null
    loadStatuses: LOAD_STATUSES
}

const initialState: Store = {
    data: null,
    loadStatuses: LOAD_STATUSES.UNKNOWN
}

export const slice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (store) => {
            store.loadStatuses = LOAD_STATUSES.LOADING;
        })

        builder.addCase(fetchWeather.rejected, (store) => {
            store.loadStatuses = LOAD_STATUSES.ERROR;
        })

        builder.addCase(fetchWeather.fulfilled, (store, action: PayloadAction<Weather>) => {
            store.loadStatuses = LOAD_STATUSES.LOADED;
            store.data = action.payload;
        })
    }
})

export const reducer = slice.reducer;

export const actions = {
    ...slice.actions,
    fetchWeather
}

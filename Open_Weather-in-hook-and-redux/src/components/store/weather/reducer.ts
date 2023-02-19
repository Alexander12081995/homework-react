import {Weather} from '../../../types/Weather'
import {LOAD_STATUSES} from '../../../types/loadStatus'
import {Action, ACTION_TYPES} from './types';

export interface Store {
    data: Weather | null
    loadStatuses: LOAD_STATUSES
}

const initialStore: Store = {
    data: null,
    loadStatuses: LOAD_STATUSES.UNKNOWN
}

export const reducer = (store: Store = initialStore, action: Action): Store => {
    switch (action.type) {
        case ACTION_TYPES.GET_WEATHER_ERROR: {
            return { data: null, loadStatuses: LOAD_STATUSES.ERROR}
        }
        case ACTION_TYPES.GET_WEATHER_START: {
            return {...store, loadStatuses: LOAD_STATUSES.LOADING}
        }
        case ACTION_TYPES.GET_WEATHER_SUCCESS: {
            return {data: action.payload, loadStatuses: LOAD_STATUSES.LOADED}
        }

        default: {return store}
    }
}

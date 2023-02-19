import { Store } from './reducer';
import {RootStore} from "../rootStore";

export const getWeather = (store: RootStore): Store['data'] => store.data;

export const getWeatherLoadStatus = (store: RootStore): Store['loadStatuses'] => store.loadStatuses;




import {RootStore} from "../rootStore";
import {Store} from "./slice";

export const getWeather = (store: RootStore): Store['data'] => store.data;

export const getWeatherLoadStatus = (store: RootStore): Store['loadStatuses'] => store.loadStatuses;




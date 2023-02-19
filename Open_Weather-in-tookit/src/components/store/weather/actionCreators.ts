import {ACTION_TYPES, GetWeatherError, GetWeatherStart, GetWeatherSuccess} from './types';
import {Weather} from "../../../types/Weather";
import {Dispatch} from "redux";
import {getWeather} from "../../../api";

export const getWeatherStart = (): GetWeatherStart => ({type: ACTION_TYPES.GET_WEATHER_START})

export const getWeatherSuccess = (data: Weather): GetWeatherSuccess => ({
    type: ACTION_TYPES.GET_WEATHER_SUCCESS,
    payload: data
})

export const getWeatherError = (): GetWeatherError => ({type: ACTION_TYPES.GET_WEATHER_ERROR})

export const fetchWeather = (params: {q: string, units: string}) => (dispatch: Dispatch) => {
    dispatch(getWeatherStart());

    getWeather(params)
        .then((weather) => {
            dispatch(getWeatherSuccess(weather))
        })
        .catch(() => {
            dispatch(getWeatherError())
        })
}

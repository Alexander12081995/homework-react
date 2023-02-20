import {useCallback, useEffect, useState} from "react"
import {DropDown, Info, Input, Loader} from './common';
import css from './app.module.css';
import debounce from 'lodash/debounce';
import {actions, getWeather, getWeatherLoadStatus} from './store/weather';
import {useDispatch, useSelector} from 'react-redux';
import {Params} from "../types/Params";
import {units} from "../const/Units";
import {LOAD_STATUSES} from "../types/loadStatus";

export const App = () => {

    const [params, setParams] = useState<Params>({
        q: 'Minsk',
        units: units[0].value,
    })
    const dispatch = useDispatch();
    const loadStatus = useSelector(getWeatherLoadStatus);
    const weather = useSelector(getWeather)

    const updateParams = (nextParams: Partial<Params>) => {
        setParams((prevParams) => ({...prevParams, ...nextParams}));
    };

    const fetchWeatherDebounced = useCallback(debounce((params: Params): void =>
        dispatch(actions.fetchWeather(params) as any), 2_000), [dispatch]);



    useEffect(() => {fetchWeatherDebounced(params)}, [params]);

    return (
        <div className={css.container}>
            <div>
                <h1 className={css.title}>Current weather</h1>
                <Input value={params.q} onChange={(q) => updateParams({q})}/>
                <DropDown value={params.units} options={units}
                          onChange={(units) => updateParams({units})}/>
                <br></br>
                {loadStatus === LOAD_STATUSES.LOADING && <Loader/>}
                {loadStatus === LOAD_STATUSES.LOADED && (
                    <div>
                        <div className={css.groupInfo}>
                            <span className={css.subtitle}>{weather?.name}</span>
                            <span className={css.tempInfo}>{Math.round(Number(weather?.main.temp))}</span>
                            <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                                 alt='city'></img>


                        </div>
                        <div>
                            <Info unit={params.units}/>
                        </div>
                    </div>

                )}

            </div>

        </div>
    )

}

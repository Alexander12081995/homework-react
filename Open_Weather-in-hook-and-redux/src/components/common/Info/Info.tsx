import { FC } from 'react';
import { getTime } from '../../utils/getTime';
import { getDate } from '../../utils/getDate';
import css from './info.module.css';
import {getWeather} from "../../store/weather";
import {useSelector} from "react-redux";


interface InfoProps {
    unit: string
}

export const Info: FC<InfoProps> = ({unit}) => {
    const weather = useSelector(getWeather)
    if (!weather) {
        return null
    }
    return (
        <div>
            <div className = { css.group } >
                <span className = { css.date }>{ getDate() }</span>
                <span className = { css.time }>{ getTime() }</span>
            </div>
            <div className = { css.table }>
               <table className = { css.info }>
                <tr>
                    <th className = { css.row_1 }>Feels like</th>
                    <th className = { css.row_1 }>Pressure</th>
                    <th className = { css.row_1 }>Humidity</th>
                </tr>
                <tr>
                    <td className = { css.row_2 }>{Math.round(weather.main.feels_like) }</td>
                    <td className = { css.row_2 }>{ weather.main.pressure }</td>
                    <td className = { css.row_2 }>{ weather.main.humidity }</td>
                </tr>
            </table> 
            </div>
            
        </div>
    )
}  

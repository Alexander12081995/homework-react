import { FC } from 'react';
import { getTime } from '../../utils/getTime';
import { getDate } from '../../utils/getDate';
import { Weather } from '../../../types/Weather';
import css from './info.module.css';




export const Info: FC<{weather: Weather }> = (weather) => {
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
                    <td className = { css.row_2 }>{Math.round(weather.weather.main.feels_like) }</td>
                    <td className = { css.row_2 }>{ weather.weather.main.pressure }</td>
                    <td className = { css.row_2 }>{ weather.weather.main.humidity }</td>
                </tr>
            </table> 
            </div>
            
        </div>
    )
}  

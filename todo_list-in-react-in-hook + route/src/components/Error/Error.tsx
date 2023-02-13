import {Link} from "react-router-dom";
import css from './error.module.css';

export const Error = () => {
    return (
        <div>
            <h2 className={ css.error }>Страница не найдена. <Link to=''>Вернуться на главную страницу</Link></h2>
        </div>
    )
}

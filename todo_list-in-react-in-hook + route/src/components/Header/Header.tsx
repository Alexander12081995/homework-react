import css from "./header.module.css";
import React from "react";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <div className={ css.groupRote }>
                <Link to='' className={css.mainPage}>Главная страница</Link>
                <Link to='/tasks' className={css.mainPage}>Список задач</Link>
                <Link to='/18+' className={css.mainPage}>18+</Link>
            </div>

            <span className={css.title}>To do list in React</span>
        </div>
    )
}

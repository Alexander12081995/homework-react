import {Button} from "../common";
import {useState} from "react";
import img from '../../images/img.jpg';
import css from './xxx.module.css';

export const Xxx = () => {

    const [age, setAge] = useState(false)

    const cancelAge = () => {
        setAge(false)
        alert('Вход запрещен лицам не достигшим совершеннолетнего возраста')

    }

    return (
        <div className={css.xxx}>
            {!age && <p className={css.text}>Политика приложения не позволяет просматривать контент данной страницы лицам не достигшим совершеннолетия.</p>}
            {age && <img src={img} alt='picture'/>}
            <div className={css.groupBtn}>
                <Button children={'Мне есть 18 лет'} onClick={() => setAge(true)}/>
                <Button children={'Мне нет 18 лет'} onClick={cancelAge}/>
            </div>


        </div>
    )
}

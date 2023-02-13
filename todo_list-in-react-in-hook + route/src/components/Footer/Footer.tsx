import {Button} from "../common";
import {useNavigate} from "react-router-dom";
import imgLeft from '../../images/imgLeft.png';
import imgRight from '../../images/imgRight.png';
import css from './footer.module.css'

export const Footer = () => {

    const navigate = useNavigate()

    const goBack = () => navigate(-1)
    const goForward  = () => navigate(1)

    return (
        <div className={css.footer}>
            <Button onClick={goBack}>
                <img src={imgLeft} alt={'back'} className={css.img}/>
            </Button>
            <Button onClick={goForward}>
                <img src={imgRight} alt={'forward'} className={css.img}/>
            </Button>
        </div>
    )
}

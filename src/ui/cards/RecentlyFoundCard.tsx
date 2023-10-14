import React, {useContext} from "react";
import { IDepartament } from "../../entities/Departament";
import Hours from '../../assets/icon-hours.svg';
import Delete from '../../assets/icon-delete-white.svg';
import styles from './styles/Card.module.css';
import { ThemeContext } from "../../ThemeProvider";

interface RecentlyFoundCardProps{
    departament : IDepartament;
    clickDeleteHandler: () => void; //Удаление из списка недавнего поиска
    clickHandler: () => void; //Открывание информации и наведение на карте на эту зону
}

const RecentlyFoundCard: React.FC<RecentlyFoundCardProps> = ({departament, clickHandler, clickDeleteHandler}) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <div className={styles.wrap_card_recently} onClick={clickHandler}>
            <div className={styles.wrap_content_recently}>
                <img src={Hours}/>
                <div>
                    {/* <p className={[styles[`${theme}_color_primary`],styles.title_recently].join(' ')}>{departament.isBank?'Отделение банка':'Банкомат'}</p> */}
                    <p className={[styles.color_secondary,styles.content_recently].join(' ')}>{departament.address}</p>
                </div>
            </div>
            <div className={styles.wrapDelete}>
                <img onClick={clickDeleteHandler} src={Delete}/>
            </div>
        </div>
    )
}

export default RecentlyFoundCard;
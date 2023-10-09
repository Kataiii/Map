import { IDepartament } from "../../entities/Departament";
import styles from './styles/Card.module.css';
import { useContext } from "react";
import { ThemeContext } from "../..";
import Phone from '../../assets/icon-telephone.svg';
import Route from '../../assets/icon-route.svg';

interface FavouritesCardProps{
    departament: IDepartament
}

const FavouritesCard: React.FC<FavouritesCardProps> = ({departament}) => {
    const theme = useContext(ThemeContext);
    const styleWrapImages = departament.isBank?styles.wrapImages:styles.wrapImagesSmall;

    return(
        <div className={[departament.isBank?styles.widhtBank:styles.widhtBankomat,styles.wrap_card_favorites].join(' ')}>
            <div>
                <p className={[styles[`${theme}_color_primary`],styles.title_favourites].join(' ')}>{departament.isBank?'Отделение банка':'Банкомат'}</p>
                <p className={[styles.color_secondary,styles.content_recently].join(' ')}>{departament.address}</p>
            </div>
            <div className={styleWrapImages}>
                <img className={styles.wrapImage} src={Phone} alt='phone'/>
                <img className={styles.wrapImage} src={Route} alt='route'/>
            </div>
        </div>
    )
}

export default FavouritesCard;
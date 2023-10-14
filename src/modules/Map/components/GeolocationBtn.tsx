import Geolocation from '../../../assets/icon-geolocation.svg';
import styleColor from '../../../App.module.css';
import styles from './css/Map.module.css';

interface GeolocationBtnProps{
    onClick: () => void;
}

const GeolocationBtn: React.FC<GeolocationBtnProps> = ({onClick}) => {
    return(
        <div className={[styleColor.activeColor, styles.formBtn].join(' ')} onClick={onClick}>
            <img src={Geolocation} alt='geolocation'/>
        </div>
    )
}

export default GeolocationBtn;
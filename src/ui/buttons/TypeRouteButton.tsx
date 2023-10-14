import styles from './styles/Button.module.css';
import {useContext} from 'react';
import { ThemeContext } from '../..';
import styleTheme from '../../App.module.css';


interface TypeRouteBtnProps{
    icon: string;
    alt?: string;
    content?: string;
    onClick?: () => void;
    isActive: boolean;
}

const TypeRouteButton: React.FC<TypeRouteBtnProps> = ({icon, alt, content, onClick, isActive}) => {
    const theme = useContext(ThemeContext);

    return(
        <div className={[styles.btnTypeRoute, isActive?styleTheme.activeColor:styleTheme[theme]].join(' ')} onClick={onClick}>
            <img src={icon} alt={alt!=null?alt:'pic'}/>
            <p className={[styles.btnTypeRouteText, isActive?styleTheme.activeColorText:styles.default].join(' ')}>{content}</p>
        </div>
    )
}

export default TypeRouteButton;
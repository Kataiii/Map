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
    const style: string = `iconBtn`;

    return(
        <div className={styleTheme.theme} onClick={onClick}>
            <img src={icon} alt={alt!=null?alt:'pic'}/>
            <p className={styleTheme.theme}>{content}</p>
        </div>
    )
}

export default TypeRouteButton;
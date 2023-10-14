import React, {useContext} from "react";
import { SizeBtn, Theme } from "../../entities/Theme";
import styles from './styles/IconButton.module.css'
import stylesTheme from '../../App.module.css';
import { ThemeContext } from "../../ThemeProvider";


interface IconButtonProps{
    icon?: any;
    alt?: string;
    onClick: () => void;
    size: SizeBtn;
}


const IconButton : React.FC<IconButtonProps> = ({icon, alt, onClick, size}) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const style: string = `${size}_iconBtn`;
    const styleTheme: string = `${theme}`;

    return(
        <div className={[stylesTheme[styleTheme], styles.icon_button, styles[style]].join(" ")} onClick={onClick}>
            <img src={icon} alt={alt != null ? alt : 'picture'}></img>
        </div>
    )
}

export default IconButton;
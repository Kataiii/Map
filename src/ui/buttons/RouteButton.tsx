import { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import styles from './styles/Button.module.css';


export interface RouteButtonProps{
    content: string;
    isActive: boolean;
    nameRoute: string;
    onClick: () => void;
}

const RouteButton: React.FC<RouteButtonProps> = ({content, isActive, onClick}) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const background = isActive? styles.primary_btn : styles[`${theme}_button`];
    const colorText = isActive?styles.primary_btn_content : styles[`${theme}_button_content`];

    return(
        <div className={[background, styles.route_panel].join(' ')} onClick={onClick}>
            <p className={[colorText, styles.route_panel_content].join(' ')}>{content}</p>
        </div>
    )
}

export default RouteButton;
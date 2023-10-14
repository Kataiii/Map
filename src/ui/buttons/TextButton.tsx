import { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import styles from './styles/Button.module.css';


interface TextButtonProps{
    content: string;
    onClick: () => void
}

const TextButton: React.FC<TextButtonProps> = ({content, onClick}) => {
    const { theme, toggleTheme } = useContext(ThemeContext);


    return(
        <div className={[styles[`${theme}_theme`], styles.btn_text].join(' ')} onClick={onClick}>
            <p className={[styles[`${theme}_theme`], styles.btn_text_content].join(' ')}>{content}</p>
        </div>
    )
}

export default TextButton;
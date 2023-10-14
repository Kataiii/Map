import { useContext, useState } from "react";
import stylesTheme from '../App.module.css';
import { ThemeContext } from "../ThemeProvider";
import styles from './styles/Search.module.css';

const Input = () => {
    const [isWrite, setIsWrite] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const { theme, toggleTheme } = useContext(ThemeContext);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = () => {
        setIsWrite(true);
    }

    const blurHandler = () => {
        setIsWrite(false);
    }

    return(
        <div className={[ stylesTheme[`${theme}`],styles.search].join(" ")} >
            <input className={[ stylesTheme[`${theme}`],styles.search_input].join(" ")} 
                value={value} 
                onChange={changeHandler} 
                onClick={clickHandler} 
                onBlur={blurHandler} 
                type={'text'} 
                placeholder='Поиск'/>
        </div>
    )
}

export default Input;
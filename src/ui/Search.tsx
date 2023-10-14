import {useState, useContext} from 'react';
import IconSearch from '../assets/icon-search.svg';
import IconDelete from '../assets/icon-delete.svg';
import styles from './styles/Search.module.css';
import stylesTheme from '../App.module.css';
import { ThemeContext } from '../ThemeProvider';


const Search: React.FC = () => {
    const [isWrite, setIsWrite] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const { theme, toggleTheme } = useContext(ThemeContext);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickInputHandler = () => {
        if(isWrite){
            setValue('');
            return;
        }
        //запрос к беку или куда-то
        console.log(value);
    }

    const clickHandler = () => {
        setIsWrite(true);
    }

    const blurHandler = () => {
        setIsWrite(false);
    }

    return(
        <div className={[ stylesTheme[`${theme}`],styles.search].join(" ")} >
            <input className={[ stylesTheme[`${theme}`],styles.search_input].join(" ")} value={value} onChange={changeHandler} onClick={clickHandler} onBlur={blurHandler} type={'text'} placeholder='Поиск'/>
            <div className={styles.img_search} onClick={clickInputHandler}>
                <img src={isWrite?IconDelete:IconSearch}/>
            </div>
        </div>
    )
}

export default Search;
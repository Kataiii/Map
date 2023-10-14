import { Link } from "react-router-dom";
import TextButton from "../ui/buttons/TextButton";
import Search from "../ui/Search";
import styles from './css/MainPage.module.css';

const MainPage = () => {
    return(
        <div className={styles.main_wrap}>
            <Search/>
            <div>
                <TextButton content={"Банк"} onClick={() => console.log('bank')}/>
                <TextButton content={"Банкомат"} onClick={() => console.log('Банкомат')}/>
            </div>
        </div>
    )
}

export default MainPage;
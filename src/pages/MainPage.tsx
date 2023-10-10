import { Link } from "react-router-dom";

const MainPage = () => {
    return(
        <div>
            <h1>Основная страница</h1>
            <p>Поиск, фильтрация, избранное, недавно искали, избранное</p>
            <Link to={'/departament/1'}>Departament 1</Link>
            <Link to={'/departament/234'}>Departament 234</Link>
            <Link to={'/navigation'}>Navigation</Link>
        </div>
    )
}

export default MainPage;
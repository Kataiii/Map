import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import CountryModule from "../modules/AdminModules/Countries/CountryModule";
import StateModule from "../modules/AdminModules/States/StateModule";
import styles from './css/AdminPage.module.css';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '..';
import LocalityModule from '../modules/AdminModules/Localities/LocalityModule';
import DepartamentModule from '../modules/AdminModules/Departaments/DepartamentModule';
import ATMModule from '../modules/AdminModules/ATMs/ATMModule';
import RouteButton, { RouteButtonProps } from '../ui/buttons/RouteButton';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';


const contentButtons: RouteButtonProps[] = [
  {
    content: 'Страны',
    isActive: true,
    nameRoute: '/',
    onClick: () => console.log('1')
  },
  {
    content: 'Субъекты',
    isActive: false,
    nameRoute: '/states',
    onClick: () => console.log('2')
  },
  {
    content: 'Города',
    isActive: false,
    nameRoute: '/localities',
    onClick: () => console.log('3')
  },
  {
    content: 'Офисы',
    isActive: false,
    nameRoute: '/offices',
    onClick: () => console.log('4')
  },
  {
    content: 'Банкоматы',
    isActive: false,
    nameRoute: '/atms',
    onClick: () => console.log('5')
  }
]

const AdminPage = () => {
  const locate = useLocation();
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const [stateNav, setStateNav] = useState<boolean[]>([true, false, false, false, false]);

  useEffect(() => {
    const newArray = Array(5).fill(false).map((item, index) => contentButtons[index].nameRoute === locate.pathname ? item = true : item = false);
    setStateNav(newArray);
  }, [locate.pathname])

  const clickHandler = (item: RouteButtonProps,index: number) => {
      let newState: boolean[] = Array(5).fill(false);
      newState[index] = true;
      setStateNav(newState);
      navigate(item.nameRoute);
  }

    return(
        <div className={[styles[theme], styles.wrap_main].join(' ')}>
            <div className={styles.wrap_route}>{
                contentButtons.map( (item, index) => {
                  return <RouteButton key={index} nameRoute={item.nameRoute} content={item.content} isActive={stateNav[index]} onClick={() => clickHandler(item, index)}/>
                })
              }</div>
            <Outlet/>
        </div>
    )
}

export default AdminPage;
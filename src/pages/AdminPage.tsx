import { ConfigProvider, Switch, Tabs } from 'antd';
import styles from './css/AdminPage.module.css';
import { useContext, useEffect, useState } from 'react';
import RouteButton, { RouteButtonProps } from '../ui/buttons/RouteButton';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../ThemeProvider';
import { darkConfig, darkSwitch, lightConfig, lightSwitch } from '../entities/ThemesConvig';
import Moon from '../assets/icon-moon.svg';
import Sun from '../assets/icon-sun.svg';


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
    nameRoute: '/admin/states',
    onClick: () => console.log('2')
  },
  {
    content: 'Города',
    isActive: false,
    nameRoute: '/admin/localities',
    onClick: () => console.log('3')
  },
  {
    content: 'Офисы',
    isActive: false,
    nameRoute: '/admin/offices',
    onClick: () => console.log('4')
  }
]

const AdminPage = () => {
  const locate = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [stateNav, setStateNav] = useState<boolean[]>([true, false, false, false]);

  useEffect(() => {
    const newArray = Array(4).fill(false).map((item, index) => contentButtons[index].nameRoute === locate.pathname ? item = true : item = false);
    setStateNav(newArray);
  }, [locate.pathname, theme])

  const clickHandler = (item: RouteButtonProps,index: number) => {
      let newState: boolean[] = Array(5).fill(false);
      newState[index] = true;
      setStateNav(newState);
      navigate(item.nameRoute);
  }

  const isDark: boolean = theme == 'dark';

  const onChange = (checked: boolean) => {
    toggleTheme();
  };

    return(
      <div className={styles[theme]}>
        <ConfigProvider theme={isDark?darkConfig:lightConfig}>
          <ConfigProvider theme={isDark?darkSwitch:lightSwitch}>
            <div className={styles.wrap_switch}>
              <Switch  checkedChildren={<img className={styles.image_switch} src={Moon} />} unCheckedChildren={<img className={styles.image_switch} src={Sun} />} defaultChecked onChange={onChange} />
            </div>
          </ConfigProvider>
          <div>
          </div>
          <div className={[styles[theme], styles.wrap_main].join(' ')}>
              <div className={styles.wrap_route}>{
                  contentButtons.map( (item, index) => {
                    return <RouteButton key={index} nameRoute={item.nameRoute} content={item.content} isActive={stateNav[index]} onClick={() => clickHandler(item, index)}/>
                  })
                }</div>
  
              <Outlet/>
          </div>
        </ConfigProvider>
      </div>
    )
    
}

export default AdminPage;
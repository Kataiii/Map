import { ConfigProvider, Tabs } from 'antd';
import styles from './css/AdminPage.module.css';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '..';
import RouteButton, { RouteButtonProps } from '../ui/buttons/RouteButton';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';


const contentButtons: RouteButtonProps[] = [
  {
    content: 'Страны',
    isActive: true,
    nameRoute: '/countries',
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
  }, [locate.pathname, theme])

  const clickHandler = (item: RouteButtonProps,index: number) => {
      let newState: boolean[] = Array(5).fill(false);
      newState[index] = true;
      setStateNav(newState);
      navigate(item.nameRoute);
  }

  const isDark: boolean = theme == 'dark';

    return(
      <>
      {
        isDark
        ?
        <ConfigProvider theme={{
          token: {
            colorBgContainer: '#1A1D24',
            colorBorder: '#363E4B',
            colorText: '#fff' ,
            colorTextPlaceholder: '#A7B0BF',
            borderRadius: 15,
            controlHeight: 55,
            fontFamily: 'VTBGroupUI',
            colorPrimary: '#0450C0',
            colorIcon: '#fff',
            colorBgElevated: '#1A1D24'
          },
          components: {
            Table:{
              headerBg: '#363E4B',
              headerBorderRadius: 15,
              headerColor: '#fff',
              borderColor: '#ffffff00',
              headerSplitColor: '#ffffff00',
              rowExpandedBg: '#1A1D24'
            },
            Select: {
              clearBg: '#363E4B',
              selectorBg: '#363E4B',
              multipleItemBg: '#363E4B',
              optionActiveBg: '#363E4B',
              optionSelectedBg: '#0450C0',
              optionSelectedColor: '#fff'
            }
          }
        }}>
          <div className={[styles[theme], styles.wrap_main].join(' ')}>
              <div className={styles.wrap_route}>{
                  contentButtons.map( (item, index) => {
                    return <RouteButton key={index} nameRoute={item.nameRoute} content={item.content} isActive={stateNav[index]} onClick={() => clickHandler(item, index)}/>
                  })
                }</div>
  
              <Outlet/>
          </div>
        </ConfigProvider>
        :
        <ConfigProvider theme={{
          token: {
            colorBgContainer: '#fff',
            colorBorder: '#A7B0BF',
            colorText: '#1A1D24' ,
            colorTextPlaceholder: '#1A1D24',
            borderRadius: 15,
            controlHeight: 55,
            fontFamily: 'VTBGroupUI',
            colorPrimary: '#0450C0',
            colorIcon: '#1A1D24',
            colorBgElevated: '#fff'
          },
          components: {
            Table:{
              headerBg: '#A7B0BF',
              headerBorderRadius: 15,
              headerColor: '#1A1D24',
              borderColor: '#ffffff00',
              headerSplitColor: '#ffffff00',
              rowExpandedBg: '#fff'
            },
            Select: {
              clearBg: '#A7B0BF',
              selectorBg: '#A7B0BF',
              multipleItemBg: '#A7B0BF',
              optionActiveBg: '#A7B0BF',
              optionSelectedBg: '#0450C0',
              optionSelectedColor: '#1A1D24'
            }
          }
        }}>
          <div className={[styles[theme], styles.wrap_main].join(' ')}>
              <div className={styles.wrap_route}>{
                  contentButtons.map( (item, index) => {
                    return <RouteButton key={index} nameRoute={item.nameRoute} content={item.content} isActive={stateNav[index]} onClick={() => clickHandler(item, index)}/>
                  })
                }</div>
  
              <Outlet/>
          </div>
        </ConfigProvider>
      }
      </>
    )
    
}

export default AdminPage;
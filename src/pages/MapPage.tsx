import TypesNavigation from '../modules/Navigation/components/TypesNavigation';
import FavouritesCard from '../ui/cards/FavouritesCard';
import { YMaps } from '@pbe/react-yandex-maps';
import MapComponent from '../modules/Map/components/Map';
import { useContext, useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from '../App.module.css';
import Delete from '../assets/icon-delete-white.svg';
import React from 'react';
import * as ymaps3 from 'ymaps3';
import { ThemeContext } from '../ThemeProvider';
//@ts-ignore
const reactify = ymaps3.reactify.bindTo(React, ReactDOM);
const {YMap} = reactify.module(ymaps3);

const MapPage = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const navigate = useNavigate();

  


  useEffect(() => {
    if(location.pathname !== '/'){
      setVisible(true);
    }
    else{
      setVisible(false);
    }
  }, [location.pathname]);

  const clickHandler = () => {
    navigate(-1);
  }

  return (
    <div className="App">
        <YMaps query={{
            apikey: '29e64032-86a4-4346-97ad-7f1d1eec4ae2',
        }}>
            <div>
               {/* <MapComponent/> */}
            </div>
        </YMaps>
        {/* <div className={[styles[`${theme}_background`], styles.main_board].join(' ')}>
          <Outlet></Outlet>
        </div>
        <div className={visible?styles.btn_back:styles.not_visible} onClick={clickHandler}>
          <img src={Delete} alt='delete'/>
        </div> */}
    </div>
  );
}

export default MapPage;
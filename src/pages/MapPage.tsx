import React from 'react';
import styles from './App.module.css';
import { YMaps } from '@pbe/react-yandex-maps';
import MapComponent from '../modules/Map/components/Map';
import IconButton from '../ui/buttons/IconButton';
import { SizeBtn, Theme } from '../entities/Theme';
import Tg from '../assets/icon-tg.svg';
import PrimaryButtom from '../ui/buttons/PrimaryButton';
import Search from '../ui/Search';
import TypeRouteButton from '../ui/buttons/TypeRouteButton';
import TypesNavigation from '../modules/Navigation/components/TypesNavigation';
import { departaments } from '../entities/Departament';
import RecentlyFoundCard from '../ui/cards/RecentlyFoundCard';


const MapPage = () => {
  return (
    <div className="App">
      <TypesNavigation></TypesNavigation>
        {/* <YMaps query={{
            apikey: '29e64032-86a4-4346-97ad-7f1d1eec4ae2',
        }}>
            <div>
               <MapComponent/>
            </div>
        </YMaps> */}
    </div>
  );
}

export default MapPage;
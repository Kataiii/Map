import React from 'react';
import styles from './App.module.css';
import { YMaps } from '@pbe/react-yandex-maps';
import MapComponent from '../modules/Map/components/Map';


const MapPage = () => {
  return (
    <div className="App">
        <YMaps query={{
            apikey: '29e64032-86a4-4346-97ad-7f1d1eec4ae2',
        }}>
            <div>
               <MapComponent/>
            </div>
        </YMaps>
    </div>
  );
}

export default MapPage;
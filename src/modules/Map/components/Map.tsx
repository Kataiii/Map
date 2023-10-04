import { Map, Placemark } from '@pbe/react-yandex-maps';
import styles from './css/Map.module.css';
import usePosition from '../helpers/usePosition';
import { useState, useEffect } from "react";
import IconLocation from '../../../assets/icon-location.svg';

const MapComponent = () => {
    const {latitude, longitude, error} = usePosition();

    return(
        <div>
            <Map 
                className={styles.mapDiv} 
                defaultState={
                    { 
                        center: [latitude, longitude], 
                        zoom: 13.5,
                        controls: ["zoomControl"]
                    }
                }
                modules={["control.ZoomControl"]}>
                    <Placemark
                        geometry={[latitude, longitude]}
                        properties={{
                        }}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: IconLocation,
                            iconImageSize: [40, 52],
                        }}/>
            </Map>
        </div>
    );
}

export default MapComponent;
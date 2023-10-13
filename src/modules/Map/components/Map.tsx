//@ts-ignore
import GeolocationImage from '../../../assets/icon-geolocation.svg';
import { Map, Placemark, RouteButton, RouteEditor, RoutePanel, GeolocationControl, ZoomControl, useYMaps } from '@pbe/react-yandex-maps';
import styles from './css/Map.module.css';
import usePosition from '../helpers/usePosition';
import { useState, useEffect, useRef } from "react";
import IconLocation from '../../../assets/icon-location.svg';
import GeolocationBtn from './GeolocationBtn';
import Geo from '../../../assets/icon-geolocation.svg';

const MapComponent = () => {
    const { latitude, longitude, error } = usePosition();
    const mapRef = useRef<ymaps.Map | undefined>();

    // const onBtnClick = () => { 
    //           const routeControl = mapRef.current?.controls.get('routePanelControl');

    //     routeControl.routePanel.state.set({
    //         // Address of the starting point.
    //         from: [latitude, longitude],
    //         // Address of the ending point.
    //         to: 'Cheryomushki metro station'
    //     });
    // }

    const clickHandle = () => {
        const geo = mapRef.current?.controls.get('geolocation');
        console.log(geo);
    }

    useEffect(() => {
        
    })

    return (
        <div>
            <Map
                instanceRef={mapRef}
                className={styles.mapDiv}
                defaultState={
                    {
                        center: [latitude, longitude],
                        zoom: 13.5,
                        controls: [
                            'geolocationControl', 'geolocation'
                        ]
                    }
                }
                
                 modules={[
                    'control.GeolocationControl'
                 ]}
                >
                <Placemark
                    geometry={[latitude, longitude]}
                    properties={{
                    }}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: IconLocation,
                        iconImageSize: [40, 52],
                    }} />
                    {/* <GeolocationControl data={{image: `${Geo}`}} options={{position: {bottom: '66px', right: '38px' }, floatIndex: 300}} /> */}
            </Map>
            <GeolocationBtn onClick={clickHandle}/>
        </div>
    );
}

export default MapComponent;
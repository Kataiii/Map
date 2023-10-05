//@ts-nocheck

import { Map, Placemark, RouteButton, RouteEditor, RoutePanel } from '@pbe/react-yandex-maps';
import styles from './css/Map.module.css';
import usePosition from '../helpers/usePosition';
import { useState, useEffect, useRef } from "react";
import IconLocation from '../../../assets/icon-location.svg';
import { log } from 'console';

const MapComponent = () => {
    const { latitude, longitude, error } = usePosition();

    const [routerPanelState, setRoutePanelState] = useState<any>(null);
    const mapRef = useRef<ymaps.Map | undefined>();

    const onBtnClick = () => { 
              const routeControl = mapRef.current?.controls.get('routePanelControl');

        routeControl.routePanel.state.set({
            // Address of the starting point.
            from: [latitude, longitude],
            // Address of the ending point.
            to: 'Cheryomushki metro station'
        });
    }

    return (
        <div>
            <Map
                instanceRef={mapRef}
                className={styles.mapDiv}
                defaultState={
                    {
                        center: [latitude, longitude],
                        zoom: 13.5,
                        controls: ["zoomControl", 'routePanelControl']
                    }
                }

                 modules={["control.ZoomControl", 'control.RoutePanel']}
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
                <button onClick={onBtnClick}>Рандомный маршрут</button>
            </Map>
        
        </div>
    );
}

export default MapComponent;
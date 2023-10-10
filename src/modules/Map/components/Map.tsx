
import GeolocationImage from '../../../assets/icon-geolocation.svg';
import { Map, Placemark, RouteButton, RouteEditor, RoutePanel, GeolocationControl, ZoomControl } from '@pbe/react-yandex-maps';
import styles from './css/Map.module.css';
import usePosition from '../helpers/usePosition';
import { useState, useEffect, useRef } from "react";
import IconLocation from '../../../assets/icon-location.svg';
import { log } from 'console';
import GeolocationBtn from './GeolocationBtn';
import ymaps from 'yandex-maps';

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
        console.log(mapRef.current?.controls);
        console.log(ymaps.geolocation.get());
        
        //Тут должен быть вызов той кнопки
        // let geolocationControl: ymaps.IControl | null | undefined = mapRef.current?.controls.get('geolocationControl');
        // geolocationControl && geolocationControl.events.add('locationchange', function(event){
        //     let position = event.get('position');
        //     console.log(position);
        // })
        // console.log(geolocationControl);
        // geolocationControl && geolocationControl.events.fire('locationchange');
        // // geolocationControl.opadd({options: {noPlacemark: true}});
        // geolocationControl.options.set({noPla})
        // geolocationControl.events.add('locationchange', function (event) {
        //     var position = event.get('position'),
        //     // При создании метки можно задать ей любой внешний вид.
        //         locationPlacemark = new ymaps.Placemark(position);
        
        //     myMap.geoObjects.add(locationPlacemark);
        //     // Установим новый центр карты в текущее местоположение пользователя.
        //     myMap.panTo(position);
        // });
        // myMap.controls.add(geolocationControl);
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
                        controls: ['routePanelControl', "geolocationControl"]
                    }
                }

                 modules={['control.RoutePanel', 'control.GeolocationControl']}
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
                <ZoomControl options={{ position: {right: 0} }} />
            </Map>
            <GeolocationBtn onClick={clickHandle}/>
        </div>
    );
}

export default MapComponent;
import { Map } from '@pbe/react-yandex-maps';
import styles from './css/Map.module.css';
import usePosition, { PositionObject } from '../helpers/usePosition';
import { useState, useEffect } from "react";

const MapComponent = () => {
    const {latitude, longitude, error} = usePosition();
    //const [coords, setCoords] =useState<PositionObject>({latitude: 55.75, longitude: 37.57})

    // useEffect(() => {
    //     const {latitude, longitude, error} = usePosition();
    //     if(latitude != undefined && longitude != undefined){
    //         setCoords({latitude: latitude, longitude: longitude});
    //     }
    //     else{
    //         console.log(error);
    //     }
    // }, [])

    return(
        <div>
            <Map className={styles.mapDiv} defaultState={{ center: [latitude, longitude], zoom: 9 }} />
        </div>
    );
}

export default MapComponent;
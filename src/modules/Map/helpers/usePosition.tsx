import { useState, useEffect, useLayoutEffect } from "react";

export interface PositionObject{
    latitude: number;
    longitude: number;
}

const usePosition = () => {
    const geo = navigator.geolocation;
    const [position, setPosition] = useState<PositionObject>({latitude: 55.75, longitude: 37.57});
    const [error, setError] = useState<string | null>(null);

    const onErrorHandler = (error : Error) => {
        setError(error.message);
    }

    useEffect(() => {
        if(!geo){
            setError('Геолокация неподдерживается браузером');
            return;
        }

        let watcher = geo.watchPosition(function (position) {
            setPosition({latitude: position.coords.latitude, longitude: position.coords.longitude});
          }, () => onErrorHandler);
        return () => geo.clearWatch(watcher);
    }, [])

    return {... position, error};
}

export default usePosition;
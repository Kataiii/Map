import {useState} from 'react';
import TypeRouteButton from '../../../ui/buttons/TypeRouteButton';
import Car from '../../../assets/icon_type_road/icon-car.svg';
import CarActive from '../../../assets/icon_type_road/icon-car-active.svg';
import Walk from '../../../assets/icon_type_road/icon-walk.svg';
import WalkActive from '../../../assets/icon_type_road/icon-walk-active.svg';
import Bicycle from '../../../assets/icon_type_road/icon-bicycle.svg';
import BicycleActive from '../../../assets/icon_type_road/icon-bicycle-active.svg';
import Bus from '../../../assets/icon_type_road/icon-bus.svg';
import BusActive from '../../../assets/icon_type_road/icon-bus-active.svg';

const icons: string[] = [Car, Bus, Bicycle, Walk];
const activeIcons: string[] = [CarActive, BusActive, BicycleActive, WalkActive];

const TypesNavigation = () => {
    const [stateNav, setStateNav] = useState<boolean[]>([true, false, false, false]);

    const clickHandler = (index: number) => {
        //изменение массива
    }

    return(
        <div>
            {
                stateNav.map((state, index) => 
                    <TypeRouteButton key={index} icon={state?activeIcons[index]:icons[index]} isActive={state} onClick={() =>clickHandler(index)}></TypeRouteButton>
                )
            }
        </div>
    )
}

export default TypesNavigation;
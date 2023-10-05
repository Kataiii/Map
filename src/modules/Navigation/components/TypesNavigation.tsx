import {useState, useRef} from 'react';
import TypeRouteButton from '../../../ui/buttons/TypeRouteButton';
import Car from '../../../assets/icon_type_road/icon-car.svg';
import CarActive from '../../../assets/icon_type_road/icon-car-active.svg';
import Walk from '../../../assets/icon_type_road/icon-walk.svg';
import WalkActive from '../../../assets/icon_type_road/icon-walk-active.svg';
import Bicycle from '../../../assets/icon_type_road/icon-bicycle.svg';
import BicycleActive from '../../../assets/icon_type_road/icon-bicycle-active.svg';
import Bus from '../../../assets/icon_type_road/icon-bus.svg';
import BusActive from '../../../assets/icon_type_road/icon-bus-active.svg';
import styles from './css/TypesNavigation.module.css';

const icons: string[] = [Car, Bus, Bicycle, Walk];
const activeIcons: string[] = [CarActive, BusActive, BicycleActive, WalkActive];

const TypesNavigation = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [stateNav, setStateNav] = useState<boolean[]>([true, false, false, false]);

    const clickHandler = (index: number) => {
        let newState: boolean[] = Array(4).fill(false);
        newState[index] = true;
        setStateNav(newState);

        ref.current?.scrollTo({left: ref.current?.children[index].getBoundingClientRect().left, behavior: 'smooth'});
        //изменение массива
    }

    const wheelHandler = (e: React.WheelEvent<HTMLDivElement>) => {
        e.currentTarget.scrollLeft += e.deltaY;
    }

    return(
        <div ref={ref} className={styles.wrapTypesNav} onWheel={wheelHandler}>
            {
                stateNav.map((state, index) => 
                    <TypeRouteButton key={index} content={`56 мин`} icon={state?activeIcons[index]:icons[index]} isActive={state} onClick={() =>clickHandler(index)}></TypeRouteButton>
                )
            }
        </div>
    )
}

export default TypesNavigation;
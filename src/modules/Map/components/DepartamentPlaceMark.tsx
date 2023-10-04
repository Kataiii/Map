import { Map, Placemark } from '@pbe/react-yandex-maps';
import { IDepartament } from '../../../entities/Departament';
import IconVTB from '../../../assets/icon-vtb.svg';


const DepartamentPlaceMark: React.FC<IDepartament> = ({id, name, address, coord }) => {

    return(
        <Placemark
                        geometry={[coord.latitude, coord.longitude]}
                        properties={{
                        }}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: IconVTB,
                            iconImageSize: [40, 52],
                        }}/>
    )
}

export default DepartamentPlaceMark;
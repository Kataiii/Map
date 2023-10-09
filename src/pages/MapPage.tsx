import TypesNavigation from '../modules/Navigation/components/TypesNavigation';
import { departaments } from '../entities/Departament';
import FavouritesCard from '../ui/cards/FavouritesCard';


const MapPage = () => {
  return (
    <div className="App">
      <TypesNavigation></TypesNavigation>
      <>
      {
        departaments.map((departament, index) => {
          return <FavouritesCard key={index} departament={departament}></FavouritesCard>
        })
      }
      </>
        {/* <YMaps query={{
            apikey: '29e64032-86a4-4346-97ad-7f1d1eec4ae2',
        }}>
            <div>
               <MapComponent/>
            </div>
        </YMaps> */}
    </div>
  );
}

export default MapPage;
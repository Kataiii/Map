import { useEffect, useState } from "react";
import { IDepartament, IDepartamentVTB } from "../../entities/Departament";
import { ILocality } from "../../entities/Locality";
import { IState } from "../../entities/State";
import { IWorkDay, IWorkDayVTB } from "../../entities/WorkDay";
import { countryAPI } from "../../services/CountriesService";
import { workDayAPI } from "../../services/DaysService";
import { departamentAPI } from "../../services/DepartamentsSetvice";
import { localityAPI } from "../../services/LocalitiesService";
import { stateAPI } from "../../services/StatesService";

const ConectModule = () => {
    const [createState, {}] = stateAPI.useCreateStatesMutation();
    const [createLocality, {}] = localityAPI.useCreateLocalitiesMutation();
    const [createDepartament, {}] = departamentAPI.useCreateDepartamentsMutation();
    const {data: localities, error: errorLocality, isLoading: isLoandingLocality} = localityAPI.useFetchAllLocalitiesQuery(1000);
    const {data: states, error: errorState, isLoading: isLoadingState} = stateAPI.useFetchAllStatesQuery(1000);
    const {data: countries, error: errorCountries, isLoading: isLoadingCountry} =countryAPI.useFetchAllCountriesQuery(10); 
    const [createWorkDay, {data: idWorkDay}] = workDayAPI.useCreateWorkDayMutation();
    const {data: workDays, error: errorWorkDays, isLoading: isLoadingWorkDays} = workDayAPI.useFetchAllWorkDaysQuery(1000);

    const getLocalityid = async(departamentVTB: IDepartamentVTB): Promise<number> => {
        const address = departamentVTB.address;
        console.log(address);
        let parts = address.split(', ');
        console.log(parts);
        let locality = localities?.find(locality => locality.name.localeCompare(parts[2]) === 0);
        console.log('locality');
        console.log(locality);
        if(locality == undefined){
            let state = states?.find(state => state.name.localeCompare(parts[1]) == 0);
            console.log('state');
            console.log(state);
            if(state == undefined){
                await createState(
                    [
                        {id:0, 
                        name: parts[1], 
                        countryId: countries?.find(item => item.name.localeCompare('Российская Федерация')) || 1} as IState
                    ]);
            }
            state = states?.find(state => state.name == parts[1]);
            await createLocality([{id:0, name: parts[2], stateId: state?.id} as ILocality]);
            locality = localities?.find(locality => locality.name == parts[2]);
        }
        return locality == undefined? 1: locality.id;
    }


    const createDays = (days: IWorkDayVTB[]): number| undefined => {
        let myMap = new Map<number, (string| null)>();
        let count = 0;

        days.map(
            (item) => {
                if(item.hours === 'выходной'){
                    myMap.set(count, null);
                    count++;
                    myMap.set(count, null);
                    count++;
                }
                else{
                    let hours = item.hours.split('-');
                    myMap.set(count, `${hours[0]}:00`);
                    count++;
                    myMap.set(count, `${hours[1]}:00`);
                    count++;
                }
            }
        )
        
        // const id = createWorkDay({
        //     id: 0,
        //     day1: {
        //         start: myMap.get(0),
        //         finish: myMap.get(1),
        //         id: 0
        //     },
        //     day2: {
        //         start: myMap.get(2),
        //         finish: myMap.get(3),
        //         id: 0
        //     },
        //     day3: {
        //         start: myMap.get(4),
        //         finish: myMap.get(5),
        //         id: 0
        //     },
        //     day4: {
        //         start: myMap.get(6),
        //         finish: myMap.get(7),
        //         id: 0
        //     },
        //     day5: {
        //         start: myMap.get(8),
        //         finish: myMap.get(9),
        //         id: 0
        //     },
        //     day6: {
        //         start: myMap.get(10),
        //         finish: myMap.get(11),
        //         id: 0
        //     },
        //     day7: {
        //         start: myMap.get(12),
        //         finish: myMap.get(13),
        //         id: 0
        //     }
        // } as IWorkDay)

        return workDays?.find(item => item.id == idWorkDay)?.id;
    }

    const [isLoadingMy, setIsLoadingMy] = useState<boolean|null>(null);

    useEffect(() => {
        
    }, [isLoadingWorkDays, isLoadingState, isLoandingLocality, isLoadingMy, isLoadingCountry])

    const expandDays = (days: IWorkDayVTB[]): number| undefined => {
        if(days.length == 7){
            return createDays(days);
        }
        return undefined;
    }

    const showFile = async (e: any) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const text = (e.target?.result)
          if(text !== undefined && text != null){
            //@ts-ignore
            var obj: IDepartamentVTB[] = JSON.parse(text);
            setIsLoadingMy(true);
            let departamentsGen = obj.map(
                item => getLocalityid(item)
                // item => 
                // ({
                //     id: 0,
                //     localityId: getLocalityid(item),
                //     address: `${item.address.split(', ')[3]}, ${item.address.split(', ')[4]}`,
                //     coord_x: item.latitude.toString(),
                //     coord_y: item.longitude.toString(),
                //     postcode: item.address.split(', ')[0],
                //     phone: '+7-XXX-XXX-XX-XX',
                //     office_type: item.officeType,
                //     sale_point_format: item.salePointName,
                //     kep: item.kep,
                //     myBranch: item.myBranch,
                //     has_ramp: item.hasRamp == null?false: true,
                //     suo_availability: item.suoAvailability,
                //     workDaysUrId: { id: expandDays(item.openHours)},
                //     workDaysFizId: { id: expandDays(item.openHoursIndividual)},
                //     description: ''
                // } as IDepartament)
            )
            // departamentsGen.map(item => createDepartament([item]))
            // setIsLoadingMy(false);
          }
        };
        reader.readAsText(e.target.files[0])
      }

    return(
        <div>
             <input type="file" onChange={(e) => showFile(e)} />
             {
                isLoadingMy
                ?
                <h1>Идет загрузка</h1>
                :
                <h1>Загрузка завершена</h1>
             }
        </div>
    )
}

export default ConectModule;
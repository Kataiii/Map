import { IPosition } from "./Position";

export interface IDepartament{
    id: number;
    name: string;
    locality_id?: number;
    work_days_id?: number[];
    address: string;
    coord: IPosition;
    postcode?: number;
    description?: string;
    isBank: boolean;
}

export const departaments: IDepartament[] = [
    {id: 1, name: 'РОО «Саратовский»', address: 'ул. Советская, д. 51, литер А', coord: {latitude: 55, longitude: 37,}, isBank:true},
    {id: 2, name: 'ОО «Приоритет» Филиала № 6318 Банка ВТБ (ПАО)', address: 'ул. Московская, д. 101', coord: {latitude: 55, longitude: 37}, isBank:true},
    {id: 3, name: 'ОО «Кировский» в г. Саратове Филиала № 6318 Банка ВТБ (ПАО)', address: 'ул. Танкистов, д. 15', coord: {latitude: 55, longitude: 37}, isBank:false},
]
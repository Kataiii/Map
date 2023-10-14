export interface IWorkDay{
        id: number;
        day1: IOneDay;
        day2: IOneDay;
        day3: IOneDay;
        day4: IOneDay;
        day5: IOneDay;
        day6: IOneDay;
        day7: IOneDay;
}

export interface IOneDay{
    start: string;
    finish: string;
    id: number;
}

export interface IWorkDayVTB{
    days: string;
    hours: string; 
}
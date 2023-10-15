export interface IWorkDay{
        id: number,
        mon_s: string | null;
        mon_f: string | null;
        tue_s: string | null;
        tue_f: string | null;
        wed_s: string | null;
        wed_f: string | null;
        thu_s: string | null;
        thu_f: string | null;
        fri_s: string | null;
        fri_f: string | null;
        sat_s: string | null;
        sat_f: string | null;
        sun_s: string | null;
        sun_f: string | null;
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
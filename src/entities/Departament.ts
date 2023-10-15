import { IWorkDay, IWorkDayVTB } from "./WorkDay";

export interface IDepartament{
    id: number;
    localityId?: number;
    workDaysUrId?: any;
    workDaysFizId?: any;
    address?: string;
    coord_x?: string;
    coord_y?: string;
    postcode?: string;
    description?: string;
    phone?: string;
    office_type?: string;
    sale_point_format?: string;
    suo_availability?: string;
    has_ramp?: boolean;
    kep?: boolean;
    myBranch?: boolean;
}

export interface IDepartamentWithLocality{
    id: number;
    sale_point_name: string;
    address: string;
    localityName: string;
}

export interface IDepartamentVTB{
    salePointName: string;
    address:  string;
    openHours: IWorkDayVTB[];
    rko: string;
    openHoursIndividual: IWorkDayVTB[];
    officeType: string;
    salePointFormat: string;
    suoAvailability: string;
    hasRamp: string;
    latitude: number;
    longitude: number;
    metroStation: string | null;
    distance: number;
    kep: boolean;
    myBranch: boolean;
}
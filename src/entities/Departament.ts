export interface IDepartament{
    id: number;
    locality_id?: number;
    name?: string;
    workDaysUrId?: number;
    workDaysFizId?: number;
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
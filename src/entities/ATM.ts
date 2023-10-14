export interface IATM{
    id: number;
    locality_id: number;
    address: string;
    coord_x?: string;
    coord_y?: string;
    allday?: boolean;
    description?: string;
}
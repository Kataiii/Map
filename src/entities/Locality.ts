export interface ILocality{
    id: number;
    name: string;
    stateId: number;
}

export interface ILocalityNameState{
    id: number;
    name: string;
    stateName: number | undefined;
}
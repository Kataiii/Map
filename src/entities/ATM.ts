export interface IATM{
    id: number;
    locality_id: number;
    address: string;
    coord_x?: string;
    coord_y?: string;
    allday?: boolean;
    description?: string;
}

export interface IService{
    wheelchair: {
        serviceCapability: string;
        serviceActivity: string;
    };
    blind: {
        serviceCapability: string;
        serviceActivity: string;
    };
    nfcForBankCards: {
        serviceCapability: string;
        serviceActivity: string;
    };
    qrRead: {
        serviceCapability: string;
        serviceActivity: string;
    };
    supportsUsd: {
        serviceCapability: string;
        serviceActivity: string;
    };
    supportsChargeRub: {
        serviceCapability: string;
        serviceActivity: string;
    };
    supportsEur: {
        serviceCapability: string;
        serviceActivity: string;
    };
    supportsRub: {
        serviceCapability: string;
        serviceActivity: string;
    }
}

export interface IATMVTB{
    address: string;
    latitude: number;
    longitude: number;
    services: IService;
}
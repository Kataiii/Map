import { IDepartament } from "./Departament";
import { ILocality } from "./Locality";
import { IState } from "./State";

export interface ICountry{
    id: number;
    name: string;
}

export let countries: ICountry[] = [
    {
        id: 1,
        name: 'Российская Федерация'
    }
] 

export let states: IState[] = [
    {
        id: 1,
        name: 'Республика Адыгея',
        countryId: 1
    },
    {
        id: 2,
        name: 'Республика Алтай',
        countryId: 1
    },
    {
        id: 3,
        name: 'Республика Башкортостан',
        countryId: 1
    },
    {
        id: 4,
        name: 'Республика Бурятия',
        countryId: 1
    },
    {
        id: 5,
        name: 'Республика Дагестан',
        countryId: 1
    },
    {
        id: 6,
        name: 'Кабардино-Балкарская Республика',
        countryId: 1
    },
    {
        id: 7,
        name: 'Республика Калмыкия',
        countryId: 1
    },
    {
        id: 8,
        name: 'Карачаево-Черкесская Республика',
        countryId: 1
    },
    {
        id: 9,
        name: 'Республика Карелия',
        countryId: 1
    },
    {
        id: 10,
        name: 'Республика Коми',
        countryId: 1
    },
    {
        id: 11,
        name: 'Республика Крым',
        countryId: 1
    },
    {
        id: 12,
        name: 'Республика Марий Эл',
        countryId: 1
    },
    {
        id: 13,
        name: 'Республика Мордовия',
        countryId: 1
    },
    {
        id: 14,
        name: 'Республика Саха (Якутия)',
        countryId: 1
    },
    {
        id: 15,
        name: 'Республика Северная Осетия',
        countryId: 1
    },
    {
        id: 16,
        name: 'Республика Татарстан',
        countryId: 1
    },
    {
        id: 17,
        name: 'Республика Тыва',
        countryId: 1
    },
    {
        id: 18,
        name: 'Удмуртская Республика',
        countryId: 1
    },
    {
        id: 19,
        name: 'Республика Хакасия',
        countryId: 1
    },
    {
        id: 20,
        name: 'Чеченская Республика',
        countryId: 1
    },
    {
        id: 21,
        name: 'Чувашская Республика',
        countryId: 1
    },
    {
        id: 22,
        name: 'Алтайский край',
        countryId: 1
    },
    {
        id: 23,
        name: 'Краснодарский край',
        countryId: 1
    },
    {
        id: 24,
        name: 'Красноярский край',
        countryId: 1
    },
    {
        id: 25,
        name: 'Приморский край',
        countryId: 1
    },
    {
        id: 26,
        name: 'Ставропольский край',
        countryId: 1
    },
    {
        id: 27,
        name: 'Хабаровский край',
        countryId: 1
    },
    {
        id: 28,
        name: 'Амурская область',
        countryId: 1
    },
    {
        id: 29,
        name: 'Архангельская область',
        countryId: 1
    },
    {
        id: 30,
        name: 'Астраханская область',
        countryId: 1
    },
    {
        id: 31,
        name: 'Белгородская область',
        countryId: 1
    },
    {
        id: 32,
        name: 'Брянская область',
        countryId: 1
    },
    {
        id: 33,
        name: 'Владимирская область',
        countryId: 1
    },
    {
        id: 34,
        name: 'Волгоградская область',
        countryId: 1
    },
    {
        id: 35,
        name: 'Вологодская область',
        countryId: 1
    },
    {
        id: 36,
        name: 'Воронежская область',
        countryId: 1
    },
    {
        id: 37,
        name: 'Ивановская область',
        countryId: 1
    },
    {
        id: 38,
        name: 'Саратовская область',
        countryId: 1
    },
    {
        id: 39,
        name: 'Москва',
        countryId: 1
    },
    {
        id: 40,
        name: 'Санкт-Петербург',
        countryId: 1
    }
]

export let localities : ILocality[] = [
    {
        id: 1,
        name: 'Майкоп',
        stateId: 1
    },
    {
        id: 2,
        name: 'Горно-Алтайск',
        stateId: 2
    },
    {
        id: 3,
        name: 'Уфа',
        stateId: 3
    },
    {
        id: 4,
        name: 'Улан-Удэ',
        stateId: 4
    },
    {
        id: 5,
        name: 'Махачкала',
        stateId: 5
    },
    {
        id: 6,
        name: 'Магас',
        stateId: 6
    },
    {
        id: 7,
        name: 'Нальчик',
        stateId: 7
    },
    {
        id: 8,
        name: 'Элиста',
        stateId: 8
    },
    {
        id: 9,
        name: 'Черкесск',
        stateId: 9
    },
    {
        id: 10,
        name: 'Петрозаводск',
        stateId: 10
    },
    {
        id: 11,
        name: 'Сыктывкар',
        stateId: 11
    },
    {
        id: 12,
        name: 'Симферополь',
        stateId: 12
    },
    {
        id: 13,
        name: 'Йошкар-Ола',
        stateId: 13
    },
    {
        id: 14,
        name: 'Саранск',
        stateId: 14
    },
    {
        id: 15,
        name: 'Якутск',
        stateId: 15
    },
    {
        id: 16,
        name: 'Владикавказ',
        stateId: 16
    },
    {
        id: 17,
        name: 'Алания',
        stateId: 17
    },
    {
        id: 18,
        name: 'Казань',
        stateId: 18
    },
    {
        id: 19,
        name: 'Кызыл',
        stateId: 19
    },
    {
        id: 20,
        name: 'Ижевск',
        stateId: 20
    },
    {
        id: 21,
        name: 'Абакан',
        stateId: 21
    },
    {
        id: 22,
        name: 'Грозный',
        stateId: 22
    },
    {
        id: 23,
        name: 'Чебоксары',
        stateId: 23
    },
    {
        id: 24,
        name: 'Барнаул',
        stateId: 24
    },
    {
        id: 25,
        name: 'Краснодар',
        stateId: 25
    },
    {
        id: 26,
        name: 'Красноярск',
        stateId: 26
    },
    {
        id: 27,
        name: 'Владивосток',
        stateId: 27
    },
    {
        id: 28,
        name: 'Ставрополь',
        stateId: 28
    },
    {
        id: 29,
        name: 'Хабаровск',
        stateId: 29
    },
    {
        id: 30,
        name: 'Благовещенск',
        stateId: 30
    },
    {
        id: 31,
        name: 'Архангельск',
        stateId: 31
    },
    {
        id: 32,
        name: 'Астрахань',
        stateId: 32
    },
    {
        id: 33,
        name: 'Белгород',
        stateId: 33
    },
    {
        id: 34,
        name: 'Брянск',
        stateId: 34
    },
    {
        id: 35,
        name: 'Владимир',
        stateId: 35
    },
    {
        id: 36,
        name: 'Волгоград',
        stateId: 36
    },
    {
        id: 37,
        name: 'Вологда',
        stateId: 37
    },
    {
        id: 38,
        name: 'Саратов',
        stateId: 38
    },
    {
        id: 39,
        name: 'Москва',
        stateId: 39
    },
    {
        id: 40,
        name: 'Санкт-Петербург',
        stateId: 40
    }
 
]

export let workDays = [
    {
        id: 1,
        mon_s: "09:00:00",
        mon_f: "18:00:00",
        tue_s: "09:00:00",
        tue_f: "18:00:00",
        wed_s: "09:00:00",
        wed_f: "18:00:00",
        thu_s: "09:00:00",
        thu_f: "18:00:00",
        fri_s: "09:00:00",
        fri_f: "18:00:00",
        sat_s: null,
        sat_f: null,
        sun_s: null,
        sun_f: null
    },
    {
        id: 2,
        mon_s: "10:00:00",
        mon_f: "19:00:00",
        tue_s: "10:00:00",
        tue_f: "19:00:00",
        wed_s: "09:00:00",
        wed_f: "18:00:00",
        thu_s: "09:00:00",
        thu_f: "18:00:00",
        fri_s: "09:00:00",
        fri_f: "18:00:00",
        sat_s: null,
        sat_f: null,
        sun_s: null,
        sun_f: null
    },
    {
        id: 3,
        mon_s: "10:00:00",
        mon_f: "19:00:00",
        tue_s: null,
        tue_f: null,
        wed_s: "09:00:00",
        wed_f: "18:00:00",
        thu_s: "09:00:00",
        thu_f: "18:00:00",
        fri_s: "09:00:00",
        fri_f: "18:00:00",
        sat_s: "10:00:00",
        sat_f: "14:00:00",
        sun_s: null,
        sun_f: null
    },
    {
        id: 4,
        mon_s: "09:00:00",
        mon_f: "18:00:00",
        tue_s: "09:00:00",
        tue_f: "18:00:00",
        wed_s: "09:00:00",
        wed_f: "18:00:00",
        thu_s: "09:00:00",
        thu_f: "18:00:00",
        fri_s: "09:00:00",
        fri_f: "18:00:00",
        sat_s: null,
        sat_f: null,
        sun_s: "09:00:00",
        sun_f: "18:00:00"
    }
];

export let departaments: IDepartament[] = [
    {
        id: 1,
        localityId: 38,
        address: `Саратовская область, г. Саратов, ул. Советская, д. 51, литер А`,
        coord_x: 51.529646.toString(), 
        coord_y: 46.018195.toString(),
        postcode: (410056).toString(),
        phone: '+7-XXX-XXX-XX-XX',
        office_type: 'Да (Зона Привилегия)',
        sale_point_format: 'РОО «Саратовский»',
        kep: true,
        myBranch: true,
        has_ramp: true,
        suo_availability: "Y",
        workDaysUrId: { id: 1},
        workDaysFizId: { id: 2},
        description: ''
    },
    {
        id: 2,
        localityId: 38,
        address: `Саратовская область, г. Саратов, ул. им. Орджоникидзе Г. К. , д. 16`,
        coord_x: 51.503066.toString(), 
        coord_y: 45.959478.toString(),
        postcode: (410056).toString(),
        phone: '+7-XXX-XXX-XX-XX',
        office_type: 'Да (Зона Привилегия)',
        sale_point_format: 'ОО «Заводской» Филиала № 6318 Банка ВТБ (ПАО)',
        kep: true,
        myBranch: true,
        has_ramp: true,
        suo_availability: "Y",
        workDaysUrId: { id: 1},
        workDaysFizId: { id: 2},
        description: ''
    },
    {
        id: 3,
        localityId: 38,
        address: `Саратовская область, г. Саратов, ул. Московская, д. 101`,
        coord_x: 51.535889.toString(), 
        coord_y: 46.025244.toString(),
        postcode: (410056).toString(),
        phone: '+7-XXX-XXX-XX-XX',
        office_type: 'Да (Зона Привилегия)',
        sale_point_format: 'ОО «Приоритет» Филиала № 6318 Банка ВТБ (ПАО)',
        kep: true,
        myBranch: true,
        has_ramp: true,
        suo_availability: "Y",
        workDaysUrId: { id: 3},
        workDaysFizId: { id: 4},
        description: ''
    },
    {
        id: 4,
        localityId: 38,
        address: `Саратовская область, г. Саратов, ул. Танкистов, д. 15`,
        coord_x: 51.548923.toString(), 
        coord_y: 46.016907.toString(),
        postcode: (410056).toString(),
        phone: '+7-XXX-XXX-XX-XX',
        office_type: 'Да (Зона Привилегия)',
        sale_point_format: 'ОО «Кировский» в г. Саратове Филиала № 6318 Банка ВТБ (ПАО)',
        kep: true,
        myBranch: true,
        has_ramp: true,
        suo_availability: "Y",
        workDaysUrId: { id: 3},
        workDaysFizId: { id: 4},
        description: ''
    },
    {
        id: 5,
        localityId: 39,
        address: `Московская область, г. Солнечногорск, ул. Красная, д. 60`,
        coord_x: 56.184479.toString(), 
        coord_y: 36.984314.toString(),
        postcode: (410056).toString(),
        phone: '+7-XXX-XXX-XX-XX',
        office_type: 'Да (Зона Привилегия)',
        sale_point_format: 'ДО «Солнечногорский» Филиала № 7701 Банка ВТБ (ПАО)',
        kep: true,
        myBranch: true,
        has_ramp: true,
        suo_availability: "Y",
        workDaysUrId: { id: 1},
        workDaysFizId: { id: 2},
        description: ''
    },
] 

export const atms = [

]
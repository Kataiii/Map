import { useEffect, useState } from "react";
import {ICountry } from "../../../entities/Country";
import { countryAPI } from "../../../services/CountriesService";


const CountryModule = () => {
    const {data: countries, error, isLoading} = countryAPI.useFetchAllCountriesQuery(10);
    const [createCountry, {}] = countryAPI.useCreateCountriesMutation();

    const handleCreate = async () => {
        await createCountry([{name: 'Россия'}] as ICountry[])
    }

    return(
        <div>
            <h1>Country Module</h1>
            { isLoading && <h1>Идет загрузка</h1>}
            { error && <h1>Произошла ошибка при загрузке</h1>}
            <div>
                <button onClick={handleCreate}>Добавить новую страну</button>
            </div>
            {
                countries && countries.map(country => 
                    <p key={country.id}>{country.id} {country.name}</p>
                )
            }
        </div>
    )
}

export default CountryModule;
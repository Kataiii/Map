import { Table } from "antd";
import { useEffect, useState } from "react";
import {ICountry } from "../../../entities/Country";
import { countryAPI } from "../../../services/CountriesService";

const columns = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
    }
  ];

const CountryModule = () => {
    const [name, setName] = useState<string>('');
    const {data: countries, error, isLoading} = countryAPI.useFetchAllCountriesQuery(10);
    const [createCountry, {}] = countryAPI.useCreateCountriesMutation();

    const handleCreate = async () => {
        if(name !== ''){
            await createCountry([{name: name}] as ICountry[])
        }
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return(
        <div>
            <h1>Country Module</h1>
            { isLoading && <h1>Идет загрузка</h1>}
            { error && <h1>Произошла ошибка при загрузке</h1>}
            <div>
                <input placeholder="Название страны" onChange={changeHandler}/>
                <button onClick={handleCreate}>Добавить новую страну</button>
            </div>
            {/* {
                countries && countries.map(country => 
                    <p key={country.id}>{country.id} {country.name}</p>
                )
            } */}
            <Table dataSource={countries} columns={columns} pagination={{ pageSize: 50 }} scroll={{ y: 240 }}/>
        </div>
    )
}

export default CountryModule;
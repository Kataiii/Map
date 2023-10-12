import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICountry } from '../entities/Country'
import { API_URL } from '../http'


export const countryAPI = createApi({
    reducerPath: 'countryAPI',
    tagTypes: ['Country'],
    baseQuery: fetchBaseQuery({baseUrl: `${API_URL}/country`}),
    endpoints: (build) => ({
        fetchAllCountries: build.query<ICountry[], number>({
            query: (limit: number = 5) => ({
                url: '/getCountries',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Country']
        }),
        createCountries: build.mutation<ICountry[], ICountry[]>({
            query: (countries) => ({
                url: '/saveAllCountries',
                method: 'POST',
                body: countries
            }),
            invalidatesTags: ['Country']
        }),
        updateCountry: build.mutation<ICountry, ICountry>({
            query: (country) => ({
                url: `/changeCountry`,
                method: 'PUT',
                body: country
            }),
            invalidatesTags: ['Country']
        }),
        deleteCountry: build.mutation<number, number>({
            query: (id) => ({
                url: `/deleteCountryById?id=${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Country']
        })
    })
})
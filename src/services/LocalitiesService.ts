import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILocality } from "../entities/Locality";
import { API_URL } from "../http";

export const localityAPI = createApi({
    reducerPath: 'localityAPI',
    tagTypes: ['Locality'],
    baseQuery: fetchBaseQuery({baseUrl: `${API_URL}/locality`}),
    endpoints: (build) => ({
        fetchAllLocalities: build.query<ILocality[], number>({
            query: (limit: number = 5) => ({
                url: '/getLocalities',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Locality']
        }),
        createLocalities: build.mutation<ILocality[], ILocality[]>({
            query: (localities) => ({
                url: '/saveAllLocalities',
                method: 'POST',
                body: localities
            }),
            invalidatesTags: ['Locality']
        }),
        updateLocality: build.mutation<ILocality, ILocality>({
            query: (locality) => ({
                url: `/updateLocality`,
                method: 'PUT',
                body: locality
            }),
            invalidatesTags: ['Locality']
        }),
        deleteLocality: build.mutation<number, number>({
            query: (locality_id) => ({
                url: `/deleteStateById?id=${locality_id}`,
                method: 'DELETE',
                body: locality_id
            }),
            invalidatesTags: ['Locality']
        })
    })
})
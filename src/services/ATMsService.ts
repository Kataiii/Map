import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IATM } from "../entities/ATM";
import { IDepartament } from "../entities/Departament";
import { API_URL } from "../http";

export const atmAPI = createApi({
    reducerPath: 'atmAPI',
    tagTypes: ['ATM'],
    baseQuery: fetchBaseQuery({baseUrl: `${API_URL}/atm_s`}),
    endpoints: (build) => ({
        fetchAllAtms: build.query<IATM[], number>({
            query: (limit: number = 5) => ({
                url: '/getATM_s',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['ATM']
        }),
        createATMs: build.mutation<IATM[], IATM[]>({
            query: (atms) => ({
                url: '/saveAllATM_s',
                method: 'POST',
                body: atms
            }),
            invalidatesTags: ['ATM']
        }),
        updateATM: build.mutation<IATM, IATM>({
            query: (atm) => ({
                url: `/updateATM_s`,
                method: 'PUT',
                body: atm
            }),
            invalidatesTags: ['ATM']
        }),
        deleteATM: build.mutation<number, number>({
            query: (atms_id) => ({
                url: `/deleteATM_sById?id=${atms_id}`,
                method: 'DELETE',
                body: atms_id
            }),
            invalidatesTags: ['ATM']
        })
    })
})
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IDepartament } from "../entities/Departament";
import { API_URL } from "../http";

export const departamentAPI = createApi({
    reducerPath: 'departamentAPI',
    tagTypes: ['Departament'],
    baseQuery: fetchBaseQuery({baseUrl: `${API_URL}/department`}),
    endpoints: (build) => ({
        fetchAllDeparta: build.query<IDepartament[], number>({
            query: (limit: number = 5) => ({
                url: '/getDepartment',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Departament']
        }),
        createDepartaments: build.mutation<IDepartament[], IDepartament[]>({
            query: (departaments) => ({
                url: '/saveAllDepartaments',
                method: 'POST',
                body: departaments
            }),
            invalidatesTags: ['Departament']
        }),
        updateDepartament: build.mutation<IDepartament, IDepartament>({
            query: (departament) => ({
                url: `/updateDepartament`,
                method: 'PUT',
                body: departament
            }),
            invalidatesTags: ['Departament']
        }),
        deleteDepartament: build.mutation<number, number>({
            query: (departament_id) => ({
                url: `/deleteDepartamentById?id=${departament_id}`,
                method: 'DELETE',
                body: departament_id
            }),
            invalidatesTags: ['Departament']
        })
    })
})
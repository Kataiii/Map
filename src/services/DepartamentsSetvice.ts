import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { IDepartament } from "../entities/Departament";
import { API_URL } from "../http";

export const departamentAPI = createApi({
    reducerPath: 'departamentAPI',
    tagTypes: ['Departament'],
    baseQuery: fetchBaseQuery({baseUrl: `${API_URL}/departament`}),
    endpoints: (build) => ({
        fetchAllDeparta: build.query<IDepartament[], number>({
            query: (limit: number = 5) => ({
                url: '/getDepartament',
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
        deleteState: build.mutation<IDepartament, IDepartament>({
            query: (departament) => ({
                url: `/deleteDepartamentById${departament.id}`,
                method: 'DELETE',
                body: departament
            }),
            invalidatesTags: ['Departament']
        })
    })
})
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IState } from "../entities/State";
import { API_URL } from "../http";

export const stateAPI = createApi({
    reducerPath: 'stateAPI',
    tagTypes: ['State'],
    baseQuery: fetchBaseQuery({baseUrl: `${API_URL}/state`}),
    endpoints: (build) => ({
        fetchAllStates: build.query<IState[], number>({
            query: (limit: number = 5) => ({
                url: '/getStates',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['State']
        }),
        createStates: build.mutation<IState[], IState[]>({
            query: (states) => ({
                url: '/saveAllStates',
                method: 'POST',
                body: states
            }),
            invalidatesTags: ['State']
        }),
        updateState: build.mutation<IState, IState>({
            query: (state) => ({
                url: `/updateState`,
                method: 'PUT',
                body: state
            }),
            invalidatesTags: ['State']
        }),
        deleteState: build.mutation<number, number>({
            query: (state_id) => ({
                url: `/deleteStateById?id=${state_id}`,
                method: 'DELETE',
                body: state_id
            }),
            invalidatesTags: ['State']
        })
    })
})
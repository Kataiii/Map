import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
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
        deleteState: build.mutation<IState, IState>({
            query: (state) => ({
                url: `/deleteStateById${state.id}`,
                method: 'DELETE',
                body: state
            }),
            invalidatesTags: ['State']
        })
    })
})
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IWorkDay } from "../entities/WorkDay";
import { API_URL } from "../http";

export const workDayAPI = createApi({
    reducerPath: 'workDayAPI',
    tagTypes: ['WorkDay'],
    baseQuery: fetchBaseQuery({baseUrl: `${API_URL}/workDays`}),
    endpoints: (build) => ({
        fetchAllWorkDays: build.query<IWorkDay[], number>({
            query: (limit: number = 5) => ({
                url: '/getWorkDays',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['WorkDay']
        }),
        createWorkDay: build.mutation<number, IWorkDay>({
            query: (workDay) => ({
                url: '/addWorkDays',
                method: 'POST',
                body: workDay
            }),
            invalidatesTags: ['WorkDay']
        }),
        updateWorkDay: build.mutation<IWorkDay, IWorkDay>({
            query: (workDay) => ({
                url: `/updateWorkDays`,
                method: 'PUT',
                body: workDay
            }),
            invalidatesTags: ['WorkDay']
        }),
        deleteWorkDay: build.mutation<number, number>({
            query: (work_day_id) => ({
                url: `/deleteWorkDaysById?id=${work_day_id}`,
                method: 'DELETE',
                body: work_day_id
            }),
            invalidatesTags: ['WorkDay']
        })
    })
})
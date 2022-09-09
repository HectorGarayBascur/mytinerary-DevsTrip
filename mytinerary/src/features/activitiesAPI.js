import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const activitiesAPI = createApi({
    reducerPath: "activitiesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),

    endpoints: (builder) => ({
        getAllActivities: builder.query({
            query: () => '/activities'
        }),
        getActivities: builder.query({
            query: (id) => '/activities?itinerary=' + id
        })
    })

})

export default activitiesAPI
export const { useGetAllActivitiesQuery, useGetActivitiesQuery } = activitiesAPI
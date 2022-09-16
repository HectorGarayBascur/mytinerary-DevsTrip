import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import url from '../api'

export const itineraiesAPI = createApi({
    reducerPath: "itineraiesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),

    endpoints: (builder) => ({
        getAllItineraries: builder.query({
            query: () => '/itineraries'
        }),
        getItineraries: builder.query({
            query: (id) => '/itineraries?city=' + id
        }),
        getItinerariesUser: builder.query({
            query: (id) => '/itineraries?user=' + id
        })
    })

})

export default itineraiesAPI
export const { useGetAllItinerariesQuery, useGetItinerariesQuery, useGetItinerariesUserQuery } = itineraiesAPI
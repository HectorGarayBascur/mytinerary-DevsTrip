import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const citiesAPI = createApi({
    reducerPath: "citiesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),

    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: () => '/cities'
        }),
        getCity: builder.query({
            query: (id) => '/cities/' + id
        })
    })

})

export default citiesAPI
export const { useGetAllCitiesQuery, useGetCityQuery } = citiesAPI
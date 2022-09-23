import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import url from '../api'

export const citiesAPI = createApi({
    reducerPath: "citiesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),

    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: () => '/cities/'
        }),
        getCity: builder.query({
            query: (id) => '/cities/' + id
        })
    })

})

export default citiesAPI
export const { useGetAllCitiesQuery, useGetCityQuery } = citiesAPI
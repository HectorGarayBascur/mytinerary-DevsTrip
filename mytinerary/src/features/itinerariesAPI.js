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
        getNewItinerary: builder.mutation({
            query(itinerary) {
                return {
                    url: "/itineraries/",
                    method: "POST",
                    body: itinerary,
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                };
            },
        }),
        getItineraries: builder.query({
            query: (id) => '/itineraries?city=' + id
        }),
        getOneItinerary: builder.mutation({
            query: (id) => ({
                url: '/itineraries/' + id,
                method: 'GET'
            })
        }),
        getItinerariesUser: builder.query({
            query: (id) => '/itineraries?user=' + id
        }),
        getlikeUser: builder.mutation({
            query: (id) => ({
                url: '/itineraries/like/' + id,
                method: 'PATCH',
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            })
        }),
        deleteItinerary: builder.mutation({
            query(id) {
                return {
                    url: "/itineraries/" + id,
                    method: "DELETE",
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                };
            },
        })
    })

})

export default itineraiesAPI
export const { useGetAllItinerariesQuery, useGetItinerariesQuery, useGetItinerariesUserQuery, useGetlikeUserMutation, useGetOneItineraryMutation, useDeleteItineraryMutation, useGetNewItineraryMutation } = itineraiesAPI
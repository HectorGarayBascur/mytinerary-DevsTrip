import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentsAPI = createApi({
    reducerPath: "commentsAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),

    endpoints: (builder) => ({
        getComments: builder.query({
            query: (id) => '/users?itinerary=' + id
        })
    })

})

export default commentsAPI
export const { useGetCommentsQuery } = commentsAPI
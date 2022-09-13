import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentsAPI = createApi({
    reducerPath: "commentsAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),

    endpoints: (builder) => ({
        getAllComments: builder.query({
            query: () => '/comments'
        }),
        getComments: builder.query({
            query: (id) => '/comments/' + id
        })
    })

})

export default commentsAPI
export const { useGetAllCommentsQuery, useGetCommentsQuery } = commentsAPI
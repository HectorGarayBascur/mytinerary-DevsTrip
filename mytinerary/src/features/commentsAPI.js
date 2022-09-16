import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import url from '../api'

export const commentsAPI = createApi({
    reducerPath: "commentsAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: url
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
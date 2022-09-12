import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersAPI = createApi({
    reducerPath: "usersAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),

    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (id) => '/users?itinerary=' + id
        })
    })

})

export default usersAPI
export const { useGetUsersQuery } = usersAPI
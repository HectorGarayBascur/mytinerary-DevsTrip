import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersAPI = createApi({
    reducerPath: "usersAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),

    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (id) => '/users?itinerary=' + id
        }),
        getNewUser:builder.mutation({
            query(user){
                return {
                    url:"users/auth/signup",
                    method:"POST",
                    body:user,
                }
            }
        })
    })

})

export default usersAPI
export const { useGetUsersQuery, useGetNewUserMutation } = usersAPI
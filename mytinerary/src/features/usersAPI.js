import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersAPI = createApi({
  reducerPath: "usersAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),

  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (id) => "/users?itinerary=" + id,
    }),
    getUsers2: builder.query({
      query: (id) => '/users/' + id,
    }),
    getNewUser: builder.mutation({
      query(user) {
        return {
          url: "users/auth/signup",
          method: "POST",
          body: user,
        };
      },
    }),
    getLogin: builder.mutation({
      query(user) {
        return {
          url: "users/signin",
          method: "POST",
          body: user,
        };
      },
    }),
    getSignOut: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/auth/signout/${id}`,
        method: "PATCH",
        body: rest,
      }),
    }),
  }),
});

export default usersAPI;
export const {
  useGetUsersQuery,
  useGetNewUserMutation,
  useGetLoginMutation,
  // useGetLoginQuery,
  useGetSignOutMutation,
  useGetUsers2Query
} = usersAPI;

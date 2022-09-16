import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import url from "../api";

export const usersAPI = createApi({
  reducerPath: "usersAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),

  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (id) => "/users?itinerary=" + id,
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
      query: ({ id, ...data }) => ({
        url: `users/auth/signout/${id}`,
        method: "PATCH",
        body: data,
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
} = usersAPI;

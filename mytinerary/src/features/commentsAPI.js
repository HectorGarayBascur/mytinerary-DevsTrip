import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import url from "../api";

export const commentsAPI = createApi({
  reducerPath: "commentsAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),

  endpoints: (builder) => ({
    getAllComments: builder.query({
      query: () => "/comments",
    }),
    getComments: builder.query({
      query: (id) => "/comments/" + id,
    }),
    getNewComment: builder.mutation({
      query(comment) {
        return {
          url: "/comments/",
          method: "POST",
          body: comment,
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        };
      },
    }),
    deleteComment: builder.mutation({
      query(id) {
        return {
          url: "/comments/" + id,
          method: "DELETE",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        };
      },
    }),
  }),
});

export default commentsAPI;
export const {
  useGetAllCommentsQuery,
  useGetCommentsQuery,
  useGetNewCommentMutation,
  useDeleteCommentMutation,
} = commentsAPI;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.user?.token;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const mainApi = createApi({
  reducerPath: "youtubeCloneApi",
  baseQuery,
  tagTypes: ["User", "Video", "My-Videos", "Comment"],
  endpoints: () => ({}),
});

export default mainApi;

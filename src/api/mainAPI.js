import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const mainApi = createApi({
  reducerPath: "youtubeCloneApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API }),
  tagTypes: ["User"],
  endpoints: () => ({}),
});

export default mainApi;

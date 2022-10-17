import mainAPI from "../mainAPI";

const authEndpoints = mainAPI.injectEndpoints({
  endpoints: builder => ({
    authUser: builder.mutation({
      query: ({ userData, path }) => ({
        url: `/auth/${path}`,
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useAuthUserMutation } = authEndpoints;

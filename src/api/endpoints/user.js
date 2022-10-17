import mainAPI from "../mainAPI";

const userEndpoints = mainAPI.injectEndpoints({
  endpoints: builder => ({
    subscriptionToChannel: builder.mutation({
      query: url => ({
        url: `/users/${url}`,
        method: "PUT",
      }),
    }),
  }),
});

export const { useSubscriptionToChannelMutation } = userEndpoints;

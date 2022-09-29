import mainAPI from "../mainAPI";

const videoEndpoints = mainAPI.injectEndpoints({
  endpoints: builder => ({
    getRequestOnVideoUrl: builder.query({
      query: urlEnd => ({
        url: `/videos/${urlEnd}`,
      }),
    }),

    uploadVideoToMongoDB: builder.mutation({
      query: body => ({
        url: "/videos",
        method: "POST",
        body,
      }),
    }),

    likeDislikeVideo: builder.mutation({
      query: ({ type, videoId }) => ({
        url: `/videos/${type}/${videoId}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useUploadVideoToMongoDBMutation, useGetRequestOnVideoUrlQuery, useLikeDislikeVideoMutation } =
  videoEndpoints;

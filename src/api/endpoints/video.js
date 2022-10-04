import mainAPI from "../mainAPI";

const videoEndpoints = mainAPI.injectEndpoints({
  endpoints: builder => ({
    // GET QUERIES
    getRequestOnVideoUrl: builder.query({
      query: urlEnd => `/videos/${urlEnd}`,
    }),

    getCommentsForVideo: builder.query({
      query: videoId => `/comments/${videoId}`,
    }),

    getCommentsForVideo: builder.query({
      query: videoId => `/comments/${videoId}`,
    }),

    // MUTATIONS

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

    addComment: builder.mutation({
      query: body => ({
        url: "/comments",
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useUploadVideoToMongoDBMutation,
  useGetRequestOnVideoUrlQuery,
  useLikeDislikeVideoMutation,
  useAddCommentMutation,
  useGetCommentsForVideoQuery,
} = videoEndpoints;

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

    getCommentsForVideo: builder.query({
      query: videoId => ({
        url: `/comments/${videoId}`,
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
  overrideExisting: false,
});

export const {
  useUploadVideoToMongoDBMutation,
  useGetRequestOnVideoUrlQuery,
  useLikeDislikeVideoMutation,
  useAddCommentMutation,
  useGetCommentsForVideoQuery,
} = videoEndpoints;

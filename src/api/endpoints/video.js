import mainAPI from "../mainAPI";

const videoEndpoints = mainAPI.injectEndpoints({
  endpoints: builder => ({
    // VIDEOS
    getVideos: builder.query({
      query: urlEnd => `/videos/${urlEnd}`,
    }),

    getAllMyVideos: builder.query({
      query: url => `/videos/${url}`,
      providesTags: ["My-Videos"],
    }),

    addView: builder.mutation({
      query: id => ({
        url: `/videos/view/${id}`,
        method: "PUT",
      }),
    }),

    uploadVideoToMongoDB: builder.mutation({
      query: body => ({
        url: "/videos",
        method: "POST",
        body,
      }),
      invalidatesTags: ["My-Videos"],
    }),

    // LIKES

    likeDislikeVideo: builder.mutation({
      query: ({ type, videoId }) => ({
        url: `/videos/${type}/${videoId}`,
        method: "POST",
      }),
    }),

    // COMMENTS

    getCommentsForVideo: builder.query({
      query: videoId => `/comments/${videoId}`,
      providesTags: ["Comment"],
    }),

    addComment: builder.mutation({
      query: body => ({
        url: "/comments",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Comment"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useUploadVideoToMongoDBMutation,
  useGetVideosQuery,
  useGetAllMyVideosQuery,
  useLikeDislikeVideoMutation,
  useAddCommentMutation,
  useGetCommentsForVideoQuery,
  useAddViewMutation,
} = videoEndpoints;

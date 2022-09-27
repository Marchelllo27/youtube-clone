import mainAPI from "../mainAPI";

const videoEndpoints = mainAPI.injectEndpoints({
  endpoints: builder => ({
    getAllSpecificUserVideos: builder.query({
      query: () => ({
        url: "videos/my-videos",
      }),
    }),
    uploadVideoToMongoDB: builder.mutation({
      query: body => ({
        url: "/videos",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useUploadVideoToMongoDBMutation, useGetAllSpecificUserVideosQuery } = videoEndpoints;

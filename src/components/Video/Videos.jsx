import { useEffect } from "react";
// EXTRA
import Card from "./Card";
import { useLazyGetVideosQuery, useLazyGetAllMyVideosQuery } from "../../api/endpoints/video";
import VideosWrapper from "./VideosWrapper";

const Videos = ({ url }) => {
  const [fetchAllMyVideos, { error: myVideosError, isLoading: myVideosIsLoading, data: myVideos }] =
    useLazyGetAllMyVideosQuery();
  const [fetchVideos, { error, isLoading, data }] = useLazyGetVideosQuery();

  useEffect(() => {
    if (url === "my-videos") {
      fetchAllMyVideos(url);
      return;
    }

    fetchVideos(url);
  }, [fetchAllMyVideos, fetchVideos, url]);

  const videoIsLoading = myVideosIsLoading || isLoading;
  const isError = myVideosError || error;
  const videos = myVideos || data;
  return (
    <>
      {isError && !videoIsLoading && <div>Something went wrong. Please try again later!.</div>}

      {videos?.length === 0 && !isError && <div>No videos found.</div>}

      {/* SKELETON LOADING */}
      {videoIsLoading && (
        <VideosWrapper>
          {Array.from(new Array(12)).map((item, index) => (
            <Card key={index} videoData={false} />
          ))}
        </VideosWrapper>
      )}

      {videos?.length > 0 && (
        <VideosWrapper>
          {videos.map(video => (
            <Card key={video?._id} videoData={video} />
          ))}
        </VideosWrapper>
      )}
    </>
  );
};
export default Videos;

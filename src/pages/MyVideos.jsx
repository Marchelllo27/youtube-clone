import { useState, useEffect } from "react";
// EXTRA
import { useGetAllSpecificUserVideosQuery } from "../api/endpoints/video";
import VideosWrapper from "../components/Shared/VideosWrapper";
import Card from "../components/Video/Card";

const MyVideos = () => {
  const { data, isLoading, error } = useGetAllSpecificUserVideosQuery();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    data && setVideos(data);
    console.log(data);
  }, [data]);

  return (
    <VideosWrapper>
      {!videos && !error && <p>No Videos. Maybe add one?</p>}
      {videos && videos.map(video => <Card videoData={video} key={video._id} />)}
      {error && <p>Something went wrong. Try again later.</p>}
    </VideosWrapper>
  );
};
export default MyVideos;

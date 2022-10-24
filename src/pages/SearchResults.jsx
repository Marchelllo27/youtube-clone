import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// EXTRA
import { useLazySearchVideosQuery } from "../api/endpoints/video";
import VideosWrapper from "../components/Video/VideosWrapper";
import Card from "../components/Video/Card";

const SearchResults = () => {
  const [startSearch, { data: videoData, isLoading, error }] = useLazySearchVideosQuery();

  const location = useLocation();
  const searchQuery = location.state;

  useEffect(() => {
    startSearch(searchQuery);
  }, [startSearch, searchQuery]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong...</div>;
  if (videoData?.length === 0) return <div>No videos found.</div>;

  return (
    <>
      {videoData && (
        <VideosWrapper>
          {videoData.map(video => (
            <Card key={video._id} videoData={video} />
          ))}
        </VideosWrapper>
      )}
    </>
  );
};
export default SearchResults;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// EXTRA
import { useLazySearchVideosQuery } from "../api/endpoints/video";
import VideosWrapper from "../components/Video/VideosWrapper";
import Card from "../components/Video/Card";

const SearchResults = () => {
  const [startSearch, { data: videoData, isLoading, error }] = useLazySearchVideosQuery();

  const location = useLocation();
  const searchQuery = location.search.substring(3);

  useEffect(() => {
    startSearch(searchQuery);
  }, [startSearch, searchQuery]);

  return (
    <>
      {error && <div>Something went wrong...</div>}
      {videoData?.length === 0 && <div>No videos found.</div>}

      {/* SKELETON LOADING */}
      {isLoading && (
        <VideosWrapper>
          {Array.from(new Array(10)).map((item, index) => (
            <Card key={index} videoData={false} />
          ))}
        </VideosWrapper>
      )}

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

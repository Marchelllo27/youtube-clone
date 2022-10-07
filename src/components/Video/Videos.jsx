import styled from "styled-components";
// EXTRA
import Card from "./Card";
import { useGetVideosQuery, useGetAllMyVideosQuery } from "../../api/endpoints/video";

const VideosWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  align-self: flex-start;

  @media (min-width: 512px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(10rem, 20rem));
    justify-content: center;
  }

  @media (min-width: 880px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 20rem));
  }

  @media (min-width: 1150px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    max-width: 1500px;
  }

  @media (min-width: 2000px) {
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    max-width: 100%;
  }
`;

const Videos = ({ url }) => {
  let videos;
  let isError;
  if (url === "my-videos") {
    const { data: fetchedVideos, error } = useGetAllMyVideosQuery(url);
    videos = fetchedVideos;
    isError = error;
  } else {
    const { data: fetchedVideos, error } = useGetVideosQuery(url);
    videos = fetchedVideos;
    isError = error;
  }

  return (
    <>
      {!videos?.length && !isError && <div>No videos found.</div>}
      {isError && <div>Something went wrong. Please try again later.</div>}
      {videos?.length > 0 && (
        <VideosWrapper>{videos && videos.map(video => <Card key={video._id} videoData={video} />)}</VideosWrapper>
      )}
    </>
  );
};
export default Videos;

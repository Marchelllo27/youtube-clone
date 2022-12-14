import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
// MUI
import { CircularProgress } from "@mui/material";
// EXTRA
import Details from "../components/Video/Details";
import Channel from "../components/Video/Channel";
import Comments from "../components/Comments/Comments";
import Recommendation from "../components/Video/Recommandation";
import Hr from "../components/Shared/Hr";
import { useLazyGetVideosQuery, useAddViewMutation } from "../api/endpoints/video";
import { setVideo } from "../store/video-slice";
import PageNotFound from "../assets/notfound.jpeg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (min-width: 48rem) {
    padding: 2rem;
  }
`;

const VideoFrame = styled.video`
  width: 100%;
  object-fit: cover;
  height: 50vh;
  max-height: 35rem;
  border: none;

  @media (min-width: 850px) {
    height: 80vh;
    max-height: 40rem;
  }
`;

const Layout = styled.section`
  padding: 0 1rem;

  @media (min-width: 70rem) {
    display: grid;
    grid-template-columns: 4fr 2fr;
    gap: 1rem;
    padding-top: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 1.1rem;
  font-weight: 400;
  margin-top: 1.5rem;
  margin-bottom: 0.6rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: 42rem) {
    text-align: center;
  }

  @media (min-width: 70rem) {
    margin: 0;
    grid-column: 1 / 2;
  }
`;

const Video = () => {
  const videoId = useParams().id;
  const dispatch = useDispatch();

  const [startFetchVideo, { data: videoData, isLoading, error }] = useLazyGetVideosQuery();

  const [increaseViewsToTheVideo] = useAddViewMutation();

  useEffect(() => {
    startFetchVideo(`find/${videoId}`).then(videoData => {
      dispatch(setVideo(videoData.data));
    });
  }, [startFetchVideo, dispatch, videoId]);

  const { title, videoUrl, imgUrl } = videoData || {};

  const onPlayHandler = () => {
    increaseViewsToTheVideo(videoId);
  };

  return (
    <>
      {isLoading && <CircularProgress color="inherit" />}
      {error && <div>Something went wrong</div>}
      {videoData && (
        <Container>
          <VideoFrame src={videoUrl} poster={imgUrl || PageNotFound} controls onPlay={onPlayHandler} />

          <Layout>
            <Title>{title}</Title>
            <Details />

            <Hr grid />

            <Channel />

            <Hr grid />

            <Recommendation />

            <Hr grid />

            <Comments videoId={videoId} />
          </Layout>
        </Container>
      )}
    </>
  );
};
export default Video;

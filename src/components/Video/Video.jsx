import styled from "styled-components";
// EXTRA
import Details from "./Details";
import Channel from "./Channel";
import Comments from "../Comments/Comments";
import Recommendation from "./Recommandation";
import HrTemplate from "../Shared/Hr";

const Container = styled.div`
  @media (min-width: 48rem) {
    padding: 2rem;
  }
`;

const VideoFrame = styled.video`
  width: 100%;
  height: 20rem;
  object-fit: cover;
`;

const TestVideo = styled.iframe`
  width: 100%;
  min-height: 30rem;
  border: none;
`;

const Layout = styled.section`
  @media (max-width: 48rem) {
    padding: 0 1.5rem;
  }

  @media (min-width: 70rem) {
    display: grid;
    grid-template-columns: 4fr 2fr;
    grid-template-rows: 2rem;
    gap: 1rem;
    padding: 2rem 0;
  }
`;

const Hr = styled(HrTemplate)``;

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
    margin-top: 0;
    grid-column: 1 / 2;
  }
`;

const Video = () => {
  return (
    <Container>
      {/* <VideoFrame src="https://www.youtube.com/embed/f7LiKMIo20Q" controls /> */}
      <TestVideo
        src="https://www.youtube.com/embed/f7LiKMIo20Q"
        title="YouTube video player"
        frameborder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // allowfullscreen
      />

      <Layout>
        <Title>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptate earum dolorum a placeat laboriosam?</Title>
        <Details />

        <Hr />

        <Channel />

        <Hr />

        <Recommendation />

        <Hr />

        <Comments />
      </Layout>
    </Container>
  );
};
export default Video;

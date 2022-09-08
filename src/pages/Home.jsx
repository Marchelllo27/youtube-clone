import { useEffect } from "react";
import styled from "styled-components";

import Card from "../components/Video/Card";

const Container = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 32rem) {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, minmax(0, 19rem));
    place-items: center;
  }

  @media (min-width: 48rem) {
    grid-template-columns: repeat(auto-fit, 25%);
  }
`;

const Home = ({ type }) => {
  useEffect(() => {
    // fetch random videos
    // fetch(`/videos/${type}`);
  }, []);

  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};
export default Home;

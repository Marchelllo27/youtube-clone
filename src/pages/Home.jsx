import { useEffect } from "react";
import styled from "styled-components";

import Card from "../components/Video/Card";

const Container = styled.div`
  padding: 2rem;
  @media (min-width: 32rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  @media (min-width: 60rem) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    gap: 1.5rem;
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

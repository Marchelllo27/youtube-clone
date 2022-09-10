import { useEffect } from "react";
import styled from "styled-components";

import Card from "../components/Video/Card";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 32rem) {
    display: grid;
    grid-template-columns: repeat(2, minmax(14rem, 20rem));
  }

  @media (min-width: 55rem) {
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }

  @media (min-width: 80rem) {
    grid-template-columns: repeat(auto-fill, 14rem);
  }

  /* @media (min-width: 100rem) {
    grid-template-columns: repeat(5, 18rem);
  } */
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

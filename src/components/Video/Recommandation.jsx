import styled from "styled-components";
import Card from "./Card";

const Recomendation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 2rem 0;

  @media (min-width: 70rem) {
    grid-column: 2 / 3;
    grid-row: 1 / -1;
    margin: 0;
  }
`;

const Recommendation = () => {
  return (
    <Recomendation>
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
      <Card type="sm" />
    </Recomendation>
  );
};
export default Recommendation;

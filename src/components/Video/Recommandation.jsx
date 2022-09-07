import styled from "styled-components";
import Card from "./Card";

const Recomendation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

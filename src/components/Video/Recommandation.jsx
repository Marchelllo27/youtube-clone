import styled from "styled-components";
// EXTRA
import Card from "./Card";
import { useGetRequestOnVideoUrlQuery } from "../../api/endpoints/video";

const Recomendation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 2rem 0;
  padding-bottom: 1rem;

  @media (min-width: 70rem) {
    grid-column: 2 / 3;
    grid-row: 1 / 8;
    margin: 0;
  }
`;

const Recommendation = () => {
  const { data: videos, isLoading, error } = useGetRequestOnVideoUrlQuery("trend");

  return <Recomendation>{videos && videos.map(video => <Card type="sm" videoData={video} />)}</Recomendation>;
};
export default Recommendation;

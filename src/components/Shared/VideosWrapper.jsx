import styled from "styled-components";

const Container = styled.div`
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
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }

  @media (min-width: 1150px) {
    grid-template-columns: repeat(4, 1fr);
  }

  /* @media (min-width: 1600px) {
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  } */
`;

const VideosWrapper = props => {
  return <Container>{props.children}</Container>;
};

export default VideosWrapper;

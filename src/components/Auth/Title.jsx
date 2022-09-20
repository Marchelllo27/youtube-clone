import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 1rem;
`;

const MainTitle = styled.h1``;
const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
`;

const Title = ({ title, subtitle }) => {
  return (
    <Container>
      <MainTitle>{title}</MainTitle>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
};
export default Title;

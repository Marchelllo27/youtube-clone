import styled from "styled-components";

const Container = styled.div``;

const Test = styled.div`
  width: 200px;
  height: 200px;
  background-color: #706f6f;
  margin-bottom: 1rem;
`;

const Home = ({ type }) => {
  return (
    <Container>
      <Test />
      <Test />
      <Test />
      <Test />
      <Test />
      <Test />
    </Container>
  );
};
export default Home;

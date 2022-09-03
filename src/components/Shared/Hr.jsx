import styled from "styled-components";

const Container = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.soft};
  margin: 1rem 0;
  border: none;
`;

const Hr = () => {
  return <Container />;
};
export default Hr;
